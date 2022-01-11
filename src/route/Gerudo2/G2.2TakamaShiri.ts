import { detail, Korok, ShrineDLC, split, step, VariableChange } from "../create";
import { cps, emy, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const TakamaShiri = [
	step(wb(cps)("SE to camp")),
	VariableChange({tail: 4}),
	detail(
		txt(emy("Lizalfos"), " inside camp"),
		txt("Tail: ", v("tail"), "/45")),
	step(wb(cps)("W")),
	important("EQUIP GERUDO"),
	Korok("W17", "Block Puzzle"),
	step(wb(cps)("SW + SW")),
	important("EQUIP GERUDO"),
	txt("Talk to ", npc("Guard")),
	txt("Talk to ", npc("Sand Seal Lady")),
	"Ride to shrine",
	ShrineDLC("Takama Shiri"),
	split("-"),
];