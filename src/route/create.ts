import { TextBlock, Text, Instruction, convert } from "./engine";

//Create text
const textHelper = (t: (string | TextBlock)[], color?: string): TextBlock => {
	if(t.length === 0){
		return {
			colorClass: color,
			content: ""
		};
	}
	const output:Text[] = [];
	t.forEach(block=>{
		if(typeof block === "string"){
			output.push({
				colorClass: color,
				content: block
			});
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

export const txt = (...t: (string | TextBlock)[]):TextBlock => textHelper(t);
export const itm = (...t: (string | TextBlock)[]):TextBlock => textHelper(t, "color-item");
export const lcn = (...t: (string | TextBlock)[]):TextBlock => textHelper(t, "color-location");
export const npc = (...t: (string | TextBlock)[]):TextBlock => textHelper(t, "color-npc");
export const cps = (t: string):TextBlock => textHelper([t], "color-direction-compass");
export const clk = (t: string):TextBlock => textHelper([t], "color-direction-clock");
export const important= (...t: (string | TextBlock)[]):TextBlock => textHelper(t, "color-important");

export const unindent = (i: Instruction | TextBlock): Instruction=>{
	if("shrineChange" in i){
		return {...i, unindentStep: true};
	}
	return {...convert(i), unindentStep: true};
};

export const indent = (i: Instruction | TextBlock): Instruction=>{
	if("shrineChange" in i){
		return {...i, indentIcon: true};
	}
	return {...convert(i), indentIcon: true};
};

export const step = (i: Instruction | TextBlock): Instruction=>{
	if("shrineChange" in i){
		return {...i, asStep: true};
	}
	return {...convert(i), asStep: true};
};

export const detail = (i: Instruction | TextBlock, detail:string): Instruction=>{
	if("shrineChange" in i){
		return {...i, detail};
	}
	return {...convert(i), detail};
};

export const image = (i: Instruction | TextBlock, image:string): Instruction=>{
	if("shrineChange" in i){
		return {...i, image};
	}
	return {...convert(i), image};
};

export const split = (text?: string | TextBlock): Instruction => {
	return {
		text: text ? txt(text) : txt(""),
		asStep: false,
		asSplit: true,
		asSection: false,
		korokChange: 0,
		shrineChange: 0
	};
};

export const Section = (title: string):Instruction =>{
	return {
		text: txt(title),
		asStep: false,
		asSplit: false,
		asSection: true,
		korokChange: 0,
		shrineChange: 0
	};
};

export const Equipment = (text: string | TextBlock, comment?: string | TextBlock): Instruction => {
	return Icon("equipment", itm(text), 0, 0, comment);
};

export const Shrine = (text: string | TextBlock, comment?: string | TextBlock): Instruction => {
	return Icon("shrine", lcn(text), 1, 0, comment);
};

export const Tower = (text: string | TextBlock, comment?: string | TextBlock): Instruction => {
	return Icon("tower", lcn(text), 0, 0, comment);
};

export const Korok = (id: string, type: string, comment?: string | TextBlock): Instruction => {
	return Icon(mapKorokToImage(type), npc(id+" ", type), 0, 1, comment);
};

export const Icon = (icon:string, text: string | TextBlock, shrineChange: number, korokChange: number, comment?: string | TextBlock): Instruction => {
	return {
		icon: icon,
		text: txt(text),
		comment: comment ? txt(comment) : undefined,
		asStep: false,
		asSplit: false,
		asSection: false,
		korokChange: korokChange,
		shrineChange: shrineChange,
	};
};

const mapKorokToImage = (korok: string):string =>{
	switch(korok){
		case "Confetti": return "korok-confetti";
		default: return "korok";
	}
};