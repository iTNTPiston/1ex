import { Instruction, stringToText, useInstructionLike, InstructionLike, instructionLikeToInstruction, txt, TextLike, itm, npc, lcn, useMultiText } from "./types";

export const unindent = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, unindentStep: true})));
export const indent = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, indentIcon: true})));
export const step = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, asStep: true})));
export const split = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, asSplit: true})));

export const detail = (i: InstructionLike, detail:TextLike): Instruction=>{
	return {...instructionLikeToInstruction(i), detail:txt(detail)};
};

export const image = (i: InstructionLike, image:string): Instruction=>{
	return {...instructionLikeToInstruction(i), image};
};

export const Section = (title: string):Instruction =>{
	return {
		text: stringToText(title),
		asStep: false,
		asSplit: false,
		asSection: true,
		korokChange: 0,
		shrineChange: 0
	};
};

export const Equipment = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("equipment", itm(text), comment);
};

export const Shrine = (text: TextLike, comment?: TextLike): Instruction => {
	return IconGeneric("shrine", lcn(text), 1, 0, comment);
};

export const Tower = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("tower", lcn(text), comment);
};

export const Korok = (id: string, type: string, comment?: TextLike): Instruction => {
	return IconGeneric(mapKorokToImage(type), npc(id+" ", type), 0, 1, comment);
};

export const Chest = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("chest", itm(text), comment);
};

export const ChestSpecial = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("chest-special", itm(text), comment);
};

export const Warp = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("warp", lcn(text), comment);
};

export const Shop = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("shop", itm(text), comment);
};

export const Cook = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("cook", itm(text), comment);
};

export const Snap = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("snap", text, comment);
};

export const MakeTOD = (type: string, text: TextLike, comment?: TextLike): Instruction => {
	switch(type){
		case "5am":
			return Icon("make-morning", text, comment);
		case "12pm":
			return Icon("make-noon", text, comment);
		case "9pm":
			return Icon("make-night", text, comment);
		default:
			return instructionLikeToInstruction(text);
	}
};

export const Discover = (location: TextLike): Instruction => {
	return Icon("location", lcn(location), "DISCOVER");
};

export const Icon = (icon:string, text: TextLike, comment?: TextLike): Instruction => {
	return IconGeneric(icon, text, 0, 0, comment);
};

export const IconGeneric = (icon:string, text: TextLike, shrineChange: number, korokChange: number, comment?: TextLike): Instruction => {
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
		case "Acorn": return "korok-acorn";
		case "Acorn in Log": return "korok-acorn";
		case "Balloon": return "korok-balloon";
		case "Basketball": return "korok-basketball";
		case "Block Puzzle": return "korok-magnesis";
		case "Confetti": return "korok-confetti";
		case "Flower Chase": return "korok-flower";
		case "Flower Count": return "korok-flower";
		case "Lift Rock": return "korok-rock";
		case "Lift Rock (Door)": return "korok-magnesis";
		case "Lift Rock (Tree)": return "korok-rock-tree";
		case "Lift Rock Blocked": return "korok-rock-under";
		case "Lily Pads": return "korok-lily";
		case "Match Tree": return "korok-matching";
		case "Match Cactus": return "korok-matching";
		case "Rock Circle": return "korok-rock-circle";
		case "Shoot Emblem": return "korok-shoot";
		case "Well": return "korok-magnesis";
		default: return "korok";
	}
};

export const VariableChange = (variableChange:{[key: string]:number}): Instruction=>{
	return {...instructionLikeToInstruction(), variableChange};
};

export const VariableSet = (variableSet:{[key: string]:number}): Instruction=>{
	return {...instructionLikeToInstruction(), variableSet};
};

