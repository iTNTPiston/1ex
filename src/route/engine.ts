import { lcn, npc, txt } from "./create";

export type Instruction = {
    icon?: string,
    text: TextBlock,
    comment?: TextBlock,
    asStep: boolean,
    asSplit: boolean,
    asSection: boolean,
    korokChange: number,
    shrineChange: number,
    unindentStep?: boolean,
    indentIcon?: boolean,
    detail?: string,
    image?:string,
}

export type Text = {
    colorClass?: string,
    content: string
}

export type TextBlock = Text | Text[];

export type InstructionData = {
    lineNumber?: number,
    counterNumber?: number,
    counterClassName?: string,
    stepNumber?: string,
    unindentStep?: boolean,
    indentIcon?: boolean,
    isSectionTitle: boolean,
    isSplit: boolean,
    icon?: string,
    text: TextBlock,
    comment?: TextBlock,
    detail?:string,
    detailRowSpan?: number,
    image?:string,
    imageRowSpan?: number,
    indicatorClass?: string,
}

export const computeInstruction = (config: (Instruction | TextBlock)[]):InstructionData[] => {
	let lineNumber = 1;
	let korokCount = 0;
	let korokSeed = 0;
	let shrineCount = 0;

	let step = "1";
	let noDetailYet = true;
	let noImageYet = true;

	const input = config.map(c=>{
		if("shrineChange" in c){
			return c;
		}else{
			return convert(c);
		}
	});

	const output: InstructionData[] = [];
	input.forEach((data,i)=>{
		if(data.asSection){
			output.push({
				lineNumber,
				isSectionTitle: true,
				isSplit: false,
				text: data.text
			});
			step = "1";
			noDetailYet = true;
			noImageYet = true;
		}else{
			const props:InstructionData = {
				lineNumber,
				isSectionTitle: false,
				isSplit: false,
				text: data.text,
				icon: data.icon,
				comment: data.comment,
				unindentStep: data.unindentStep,
				indentIcon: data.indentIcon,
			};

			if(data.asStep){
				props.stepNumber = step;
				step = incStep(step);
				props.indicatorClass="indicator-color-step";
			}else if(data.asSplit){
				step = "1";
				props.indicatorClass="indicator-color-split";
				noDetailYet = true;
			}else{
				props.indicatorClass="indicator-color-none";
			}

			if(data.shrineChange !== 0){
				shrineCount+=data.shrineChange;
				if(korokCount===0){
					props.text = txt(lcn(`${shrineCount} `),data.text);
				}else{
					props.text = txt(lcn(`${shrineCount}.${korokCount % 100} `),data.text);
				}
				props.counterNumber = shrineCount;
				props.counterClassName = "counter-color-shrine";
			}else if(data.korokChange !== 0){
				if(data.korokChange > 0){
					korokCount += data.korokChange;
					korokSeed += data.korokChange;
				}else{
					korokSeed -= data.korokChange;//Hestu only takes seed, not total count
				}
				props.text = txt(npc(`${korokSeed % 100} `),data.text);
				props.counterNumber = korokCount;
				props.counterClassName = "counter-color-korok";
			}

			if(data.detail){
				props.detail = data.detail;
				let extra = 0;
				if(data.icon){
					extra++;
				}
				let j = i+1;
				for(;j<input.length;j++){
					if(input[j].asSection || input[j].asSplit || input[j].detail){
						break;
					}
					if(input[j].icon){
						extra++;
					}
				}
				props.detailRowSpan = j - i + extra;
				noDetailYet = false;
			}else if(noDetailYet){
				props.detail = "";
				props.detailRowSpan = 1;
			}

			if(data.image){
				props.image = data.image;
				let extra = 0;
				if(data.icon){
					extra++;
				}
				let j = i+1;
				for(;j<input.length;j++){
					if(input[j].asSection || input[j].image){
						break;
					}
					if(input[j].icon){
						extra++;
					}
				}
				props.imageRowSpan = j - i + extra;
				noImageYet = false;
			}else if(noImageYet){
				props.imageRowSpan = 1;
			}
            
			output.push(props);
			lineNumber++;
			if(data.icon){
				lineNumber++;
			}
		}
        
	});

	return output;
};

export const convert = (textBlock: TextBlock):Instruction =>{
	return {
		text: textBlock,
		asStep: false,
		asSplit: false,
		asSection: false,
		korokChange: 0,
		shrineChange: 0
	};
};

const incStep = (step:string):string =>{
	if(step==="Z"){
		return "0";
	}
	if(step === "9"){
		return "A";
	}
	return String.fromCharCode(step.charCodeAt(0)+1);
};

