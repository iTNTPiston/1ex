import { Instruction, stringToText, useInstructionLike, InstructionLike, instructionLikeToInstruction, txt, TextLike, itm, npc, lcn, useMultiText, bss, v, AbilityUsage } from "./types";

export const unindent = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, unindentStep: true})));
export const indent = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, indentIcon: true})));
export const step = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, asStep: true})));
export const split = useMultiText(useInstructionLike((i: Instruction): Instruction=>({...i, asSplit: true})));

export const ability = (i: InstructionLike, abilityUsage:AbilityUsage): Instruction=>{
	return {...instructionLikeToInstruction(i), ability: abilityUsage};
};

export const detail = (i: InstructionLike, detail:TextLike): Instruction=>{
	return {...instructionLikeToInstruction(i), detail:txt(detail)};
};

export const image = (image:string): Instruction=>{
	return {...instructionLikeToInstruction(), image};
};

export const Section = (title: string):Instruction =>{
	return {
		text: stringToText(title),
		asStep: false,
		asSplit: false,
		asSection: true,
		asMemory: false,
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

export const ShrineBlessing = (text: TextLike, comment?: TextLike): Instruction => {
	return IconGeneric("chest", lcn(text), 1, 0, comment);
};

export const ShrineSword = (text: TextLike, comment?: TextLike): Instruction => {
	return IconGeneric("shrine-sword", lcn(text), 1, 0, comment);
};

export const ShrineDoubleSword = (text: TextLike, comment?: TextLike): Instruction => {
	return IconGeneric("shrine-double-sword", lcn(text), 1, 0, comment);
};

export const ShrineDLC = (text: TextLike, comment?: TextLike): Instruction => {
	return Icon("shrine-dlc", lcn("EX.", v("krk"), " ",text),  comment);
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

export const Boss = (type:string, comment?: TextLike):Instruction => {
	return {
		...Icon(bossTypeToIcon(type), bss(type), comment),
		bossType: bossTypeToCounter(type)
	};
};

const bossTypeToIcon = (type:string):string => {
	switch(type){
		case "Red Hinox": return "hinox-red";
		case "Blue Hinox": return "hinox-blue";
		case "Black Hinox": return "hinox-black";
		case "Stalnox": return "hinox-stal";
		case "Molduga": return "molduga";
		case "Talus": return "talus";
		case "Rare Talus": return "talus-rare";
		case "Luminous Talus": return "talus-luminous";
		case "Igneo Talus": return "talus-igneo";
		case "Rare Igneo Talus": return "talus-igneo-rare";
		case "Luminous Igneo Talus": return "talus-igneo-luminous";
		case "Frost Talus": return "talus-frost";
		case "Rare Frost Talus": return "talus-frost-rare";
		case "Luminous Frost Talus": return "talus-frost-luminous";
		case "Molduking":
		case "Igneo Talus Titan":
			return "bossdlc";
		default: return "";
	}
};

const bossTypeToCounter = (type:string):string => {
	switch(type){
		case "Red Hinox": 
		case "Blue Hinox": 
		case "Black Hinox": 
		case "Stalnox": 
			return "Hinox";
		case "Talus": 
		case "Rare Talus": 
		case "Luminous Talus": 
		case "Igneo Talus": 
		case "Rare Igneo Talus": 
		case "Luminous Igneo Talus": 
		case "Frost Talus": 
		case "Rare Frost Talus": 
		case "Luminous Frost Talus": 
			return "Talus";
		default: return "";
	}
};

export const Memory = (location: string):Instruction => {
	const name = memoryLocationToName(location);
	const icon = location === "Ash Swamp" ? "memory-final" : "memory";
	return {
		...Icon(icon, lcn(location), name),
		asMemory: true,
	};
};

const memoryLocationToName = (location: string): string => {
	switch(location) {
		case "Lanayru Road": return "Return of Calamity Ganon";
		case "Sacred Grounds": return "Subdued Ceremony";
		case "Lake Kolomo": return "Resolve and Grief";
		case "Ancient Columns": return "Zelda's Resentment";
		case "Kara Kara Bazaar": return "Blades of the Yiga";
		case "Eldin Canyon": return "A Premonition";
		case "Irch Plain": return "Silent Princess";
		case "West Necluda": return "Shelter from the Storm";
		case "Hyrule Castle": return "Father and Daughter";
		case "Spring of Power": return "Slumbering Power";
		case "Sanidin Park": return "To Mount Lanayru";
		case "Hyrule Field": return "Despair";
		case "Ash Swamp": return "Zelda's Awakening";
		default: return "Unknown Memory";
	}
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
		asMemory: false,
		korokChange: korokChange,
		shrineChange: shrineChange,
	};
};

const mapKorokToImage = (korok: string):string =>{
	switch(korok){
		case "Acorn": return "korok-acorn";
		case "Acorn Flying": return "korok-acorn-flying";
		case "Acorn in Log": return "korok-acorn";
		case "Balloon": return "korok-balloon";
		case "Basketball": return "korok-basketball";
		case "Block Puzzle": return "korok-magnesis";
		case "Boulder Golf": return "korok-golf-boulder";
		case "Confetti": return "korok-confetti";
		case "Flower Chase": return "korok-flower";
		case "Flower Count": return "korok-flower";
		case "Ice Block": return "korok-ice";
		case "Lift Rock": return "korok-rock";
		case "Lift Rock (Door)": return "korok-magnesis";
		case "Lift Rock (Tree)": return "korok-rock-tree";
		case "Lift Rock Blocked": return "korok-rock-under";
		case "Light Chase": return "korok-light-chase";
		case "Lily Pads": return "korok-lily";
		case "Match Tree": return "korok-matching";
		case "Match Cactus": return "korok-matching";
		case "Metal Box Circle": return "korok-magnesis";
		case "Offer Apple": return "korok-offer-apple";
		case "Offer Banana": return "korok-offer-banana";
		case "Offer Egg": return "korok-offer-egg";
		case "Race": return "korok-race";
		case "Rock Circle": return "korok-rock-circle";
		case "Shoot Emblem": return "korok-shoot";
		case "Snowball Golf": return "korok-golf-snowball";
		case "Tree Stump": return "korok-magnesis";
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

