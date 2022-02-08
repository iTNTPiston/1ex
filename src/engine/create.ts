
import { TextLike, itm, npc, lcn, bss, txt } from ".";

// export const Boss = (type:string, comment?: TextLike):Instruction => {
// 	return {
// 		...Icon(bossTypeToIcon(type), bss(type), comment),
// 		bossType: bossTypeToCounter(type)
// 	};
// };

// const bossTypeToIcon = (type:string):string => {
// 	switch(type){
// 		case "Red Hinox": return "hinox-red";
// 		case "Blue Hinox": return "hinox-blue";
// 		case "Black Hinox": return "hinox-black";
// 		case "Stalnox": return "hinox-stal";
// 		case "Molduga": return "molduga";
// 		case "Stone Talus": return "talus";
// 		case "Rare Talus": return "talus-rare";
// 		case "Luminous Talus": return "talus-luminous";
// 		case "Igneo Talus": return "talus-igneo";
// 		case "Frost Talus": return "talus-frost";
// 		case "Molduking":
// 		case "Igneo Talus Titan":
// 			return "bossdlc";
// 		default: return "";
// 	}
// };

// const bossTypeToCounter = (type:string):string => {
// 	switch(type){
// 		case "Red Hinox": 
// 		case "Blue Hinox": 
// 		case "Black Hinox": 
// 		case "Stalnox": 
// 			return "Hinox";
// 		case "Stone Talus": 
// 		case "Rare Talus": 
// 		case "Luminous Talus": 
// 		case "Igneo Talus": 
// 		case "Frost Talus": 
// 			return "Talus";
// 		default: return "";
// 	}
// };

// export const Memory = (location: string):Instruction => {
// 	const name = memoryLocationToName(location);
// 	const icon = location === "Ash Swamp" ? "memory-final" : "memory";
// 	return {
// 		...Icon(icon, lcn(location), name),
// 		asMemory: true,
// 	};
// };

export const memoryLocationToName = (location: string): string => {
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

// export const Icon = (icon:string, text: TextLike, comment?: TextLike): Instruction => {
// 	return IconGeneric(icon, text, 0, 0, comment);
// };

// export const IconGeneric = (icon:string, text: TextLike, shrineChange: number, korokChange: number, comment?: TextLike): Instruction => {
// 	return {
// 		icon: icon,
// 		text: txt(text),
// 		comment: comment ? txt(comment) : undefined,
// 		asStep: false,
// 		asSplit: false,
// 		asSection: false,
// 		asMemory: false,
// 		korokChange: korokChange,
// 		shrineChange: shrineChange,
// 	};
// };

// export const VariableChange = (variableChange:{[key: string]:number}): Instruction=>{
// 	return {...instructionLikeToInstruction(), variableChange};
// };

// export const VariableSet = (variableSet:{[key: string]:number}): Instruction=>{
// 	return {...instructionLikeToInstruction(), variableSet};
// };

