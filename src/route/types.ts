export type Instruction = {
	korokCode?: string,
    icon?: string,
    text: TextBlock,
    comment?: TextBlock,
    asStep: boolean,
    asSplit: boolean,
    asSection: boolean,
	asMemory: boolean,
    korokChange: number,
    shrineChange: number,
	bossType?: string,
    unindentStep?: boolean,
    indentIcon?: boolean,
    detail?: TextBlock,
	ability?: AbilityUsage,
	//Image will add the image to the next instruction (if exists)
    image?:string,

    //variable change will not introduce a new line
    variableChange?: {[key: string]:number}
    variableSet?: {[key: string]:number}
}

export type Text = {
    colorClass?: string,
    content: string
}

export type TextBlock = Text | Text[];

export type TextLike = string | TextBlock;
export type InstructionLike = TextLike | Instruction | undefined;

export type InstructionData = {
    lineNumber?: number,
    counterNumber?: string,
    counterClassName?: string,
    stepNumber?: string,
    unindentStep?: boolean,
    indentIcon?: boolean,
    isSectionTitle: boolean,
    isSplit: boolean,
    icon?: string,
    text: TextBlock,
    comment?: TextBlock,
    detail?:TextBlock,
	detailClass?:string,
    detailRowSpan?: number,
	displayEmptyDetailSecondRow?: boolean,
    image?:string,
    imageRowSpan?: number,
	displayEmptyImageSecondRow?: boolean,
    indicatorClass?: string,
    variables: {[key: string]:number},
	error?: string,
}

export type AbilityUsage = {
	fury?: number,
	gale?: number,
}

export type ChangeData = {
	version: string,
	date: string,
	changes: (string | string[])[],
}

export const isString = (input?: InstructionLike): boolean=>{
	return typeof input === "string";
};

export const isInstruction = (input?: InstructionLike): boolean=>{
	return input!==undefined && typeof input !== "string" && "shrineChange" in input;
};

export const instructionLikeToInstruction = (input?: InstructionLike):Instruction =>{
	if(input === undefined){
		return {
			text: {
				content:""
			},
			asStep: false,
			asSplit: false,
			asSection: false,
			asMemory: false,
			korokChange: 0,
			shrineChange: 0
		};
	}
	if(isInstruction(input)){
		return input as Instruction;
	}
	if(isString(input)){
		return textBlockToInstruction(stringToText(input as string));
	}
	return textBlockToInstruction(input as TextBlock);
};

export const textBlockToInstruction = (textBlock: TextBlock):Instruction =>{
	return {
		text: textBlock,
		asStep: false,
		asSplit: false,
		asSection: false,
		asMemory: false,
		korokChange: 0,
		shrineChange: 0
	};
};

export const stringToText = (str: string, colorClass?: string): Text => {
	return {
		colorClass: colorClass,
		content: str
	};
};

// Type helpers
export const useInstructionLike = <T>(instructionFunction: (input: Instruction)=>T):(input?: InstructionLike)=>T => {
	return input =>instructionFunction(instructionLikeToInstruction(input));
};

export const useMultiText= <T>(instructionFunction: (input?: InstructionLike)=>T):(input?: InstructionLike, ...moreInput: TextLike[])=>T => {
	return (input, ...moreInput)=>{
		if(isInstruction(input) || moreInput.length === 0){
			return instructionFunction(instructionLikeToInstruction(input));
		}
		//If there is multiple inputs, cat the texts
		const text = txt(input as TextLike, ...moreInput);
		return instructionFunction(instructionLikeToInstruction(text));
	};
    
};

// Texts
//Create text
const textHelper = (t: TextLike[], color?: string): TextBlock => {
	if(t.length === 0){
		return stringToText("", color);
	}
	const output:Text[] = [];
	t.forEach(block=>{
		if(typeof block === "string"){
			output.push(stringToText(block, color));
		}else if(Array.isArray(block)){
			block.forEach(b=>output.push({
				colorClass: b.colorClass ?? color,
				content: b.content
			}));
		}else{
			output.push({
				colorClass: block.colorClass ?? color,
				content: block.content
			});
		}
	});
	if(output.length===1){
		return output[0];
	}
	return output;
};

//Flatten text
export const flattenText = (t: TextLike): string =>{
	if(typeof t === "string"){
		return t;
	}
	if(Array.isArray(t)){
		return t.map(text=>text.content).join("");
	}
	return t.content;
};

export const txt = (...t: TextLike[]):TextBlock => textHelper(t);
export const itm = (...t: TextLike[]):TextBlock => textHelper(t, "color-item");
export const lcn = (...t: TextLike[]):TextBlock => textHelper(t, "color-location");
export const npc = (...t: TextLike[]):TextBlock => textHelper(t, "color-npc");
export const rne = (...t: TextLike[]):TextBlock => textHelper(t, "color-rune");
export const bss = (...t: TextLike[]):TextBlock => textHelper(t, "color-boss");
export const emy = (...t: TextLike[]):TextBlock => textHelper(t, "color-enemy");
export const cps = (t: string):TextBlock => textHelper([t], "color-direction-compass");
export const clk = (t: string):TextBlock => textHelper([t], "color-direction-clock");
export const lnk = (t: string):TextBlock => textHelper([t], "color-link");
export const sm = (...t: TextLike[]):TextBlock => textHelper(t, "color-sm");
export const bg = (...t: TextLike[]):TextBlock => textHelper(t, "color-bg");
export const v = (t: string):TextBlock => textHelper([t], "color-variable");
export const important= (...t: TextLike[]):TextBlock => textHelper(t, "color-important");
export const gale = ():TextBlock => textHelper([""], "color-gale");
export const fury = ():TextBlock => textHelper([""], "color-fury");

export const renderTextBlock = (text: TextBlock, variables: {[key:string]: number}): string => {
	if(Array.isArray(text)){
		return text.map(t=>renderText(t,variables)).join("");
	}
	return renderText(text, variables);
};

const renderText = (text: Text, variables: {[key:string]: number}): string => {
	if(text.colorClass === "color-variable"){
		return String(variables[text.content]);
	}
	return text.content;
};