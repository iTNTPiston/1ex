import { Chest, detail, ShrineBlessing, split, step } from "../create";
import { cps, itm, npc, txt } from "../types";
import { wb } from "../windbomb";

export const DagahKeek = [
	step("WB to ", npc("King")),
	detail(
		Chest("Lightscale Trident", "Keep for duping"),
		"Lynel, Hammer, RGC, Knight, Trident"),
	txt("Talk to ", npc("Song Girl")),
	detail(
		txt("Talk to ", npc("Wife Guy")),
		"Goes to pillar at 7AM, goes to SPA area at 8pm"),
	step(wb(cps)("W")),
	detail(
		"Activate Shrine",
		"Don't use the trident afterwards. Keep for duping."),
	itm("1 Lotus Seed"),
	ShrineBlessing("Dagah Keek"),
	split("-"),
];