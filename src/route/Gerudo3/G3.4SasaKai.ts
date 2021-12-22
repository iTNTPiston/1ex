import { detail, Korok, MakeTOD, Memory, Shop, Shrine, ShrineDoubleSword, split, step, VariableChange } from "../create";
import { cps, emy, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const SasaKai = [
	step(wb(cps)("W> + N midair")),
	Korok("G34", "Block Puzzle", "Bottom right"),
	step(wb(cps)("<W Turn")),
	MakeTOD("12pm", "Make Noon", "For Sasa Kai"),
	Shrine("Daqo Tah"),
	split("-"),

	step(wb(cps)("SE to camp")),
	VariableChange({tail: 5}),
	detail(
		txt(emy("Lizalfos"), " inside camp"),
		txt("Tail: ", v("tail"), "/45")),
	step(wb(cps)("S> Turn")),
	txt("Talk to ", npc("Rhondson")),
	detail(
		txt("Talk to ", npc("Cold Potion Guy")),
		"Can buy cold darner here. DO NOT GIVE BEETLE"),
	Memory("Kara Kara Bazaar"),
	split("-"),

	VariableChange({tail: 1}),
	Shop("Lizalfos Tail"),
	txt("Talk to ", npc("Shrine Guy")),
	step(wb(cps)(".N")),
	Korok("W17", "Block Puzzle"),
	step(wb(cps)("W + N midairs")),
	ShrineDoubleSword("Sasa Kai"),
	split("-"),
    
];