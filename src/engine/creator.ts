import { stringToText, instructionLikeToInstructionPacket } from "./convert";
import { lcn, npc, txt, v, itm, emy, ingredient } from "./strings";
import { InstructionLike, InstructionPacket, TextLike } from "./types";

export const SPLIT = "split" as const;
export const STEP = "step" as const;

export type InstructionPacketWithExtend = InstructionPacket &{
    extend: (extra: Partial<InstructionPacket>)=>InstructionPacket
}

const addExtend = (instruction: InstructionPacket): InstructionPacketWithExtend => {
	const instructionWithExtend = instruction as InstructionPacketWithExtend;
	instructionWithExtend.extend = (extra)=>({...instruction, ...extra});
	return instructionWithExtend;
};

export const Section = (title: string): InstructionPacket =>{
	return {
		text: stringToText(title),
		type: "section"
	};
};

export const Tower = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "tower",
		text: lcn(text),
		comment,
		type: "split",
		splitPrefix: "-",
	});
};

export const Shrine = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "shrine",
		text: lcn(text),
		shrineChange: 1,
		type: "split",
		splitPrefix: "-",
	});
};

export const ShrineBlessing = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "shrine",
		text: lcn(text),
		shrineChange: 1,
		type: "split",
		splitPrefix: "-",
	});
};

export const ShrineSword = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "shrine-sword",
		text: lcn(text),
		shrineChange: 1,
		type: "split",
		splitPrefix: "-",
	});
};

export const ShrineDoubleSword = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "shrine-double-sword",
		text: lcn(text),
		shrineChange: 1,
		type: "split",
		splitPrefix: "-",
	});
};

export const ShrineDLC = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "shrine-dlc",
		text: lcn("EX ", text),
		comment: txt("Check ", v("krk"), " Koroks"),
		type: "split",
		splitPrefix: "-",
	});
};

export const Warp = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "warp",
		text: lcn(text),
		comment: txt("Check ", v("krk"), " Koroks"),
		type: "split",
		splitPrefix: "-",
	});
};

export const Korok = (id: string, type: string, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: mapKorokToImage(type),
		text: npc(id+" ", type),
		comment,
		korokChange: 1,
		korokCode: id
	});
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
		case "Lift Rock Blkd": return "korok-rock-under";
		case "Light Chase": return "korok-light-chase";
		case "Lily Pads": return "korok-lily";
		case "Match Tree": return "korok-matching";
		case "Match Cactus": return "korok-matching";
		case "Metal Box Circle": return "korok-magnesis";
		case "Offer Apple": return "korok-offer-apple";
		case "Offer Banana": return "korok-offer-banana";
		case "Offer Durian": return "korok-offer-durian";
		case "Offer Egg": return "korok-offer-egg";
		case "Offer Pepper": return "korok-offer-apple";
		case "Race": return "korok-race";
		case "Rock Circle": return "korok-rock-circle";
		case "Shoot Emblem": return "korok-shoot";
		case "Snowball Golf": return "korok-golf-snowball";
		case "Tree Stump": return "korok-magnesis";
		case "Well": return "korok-magnesis";
		default: return "korok";
	}
};

export const Equipment = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "equipment",
		text: itm(text),
		comment
	});
};

export const Chest = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "chest",
		text: itm(text),
		comment
	});
};

export const ChestSpecial = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "chest-special",
		text: itm(text),
		comment
	});
};

export const Shop = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "shop",
		text: itm(text),
		comment
	});
};

export const Cook = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "cook",
		text: itm(text),
		comment
	});
};

export const MakeMorning = (comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "make-morning",
		text: "Make Morning",
		comment
	});
};

export const MakeNoon = (comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "make-noon",
		text: "Make Noon",
		comment
	});
};

export const MakeNight = (comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "make-night",
		text: "Make Night",
		comment
	});
};

export const SnapElite = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "snap",
		text: emy(text),
		comment: "SNAP Elite"
	});
};

export const SnapQuest = (text: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "snap",
		text: npc(text),
		comment: "SNAP Quest"
	});
};

export const Discover = (location: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "location",
		text: npc(location),
		comment: "DISCOVER"
	});
};

export const Item = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "item",
		text: itm(text),
		comment
	});
};

export const Npc = (text: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "npc",
		text: npc(text),
		comment
	});
};

export const Ingredient = (text: TextLike, material: TextLike, comment?: TextLike): InstructionPacketWithExtend => {
	return addExtend({
		icon: "item",
		text: itm(text),
		comment: txt(material, " ", comment ?? ""),
	});
};

export const setImportant = (... inst: InstructionLike[]): InstructionLike[] => {
	return inst.map(i=>({
		...instructionLikeToInstructionPacket(i),
		important: true
	}));
};
