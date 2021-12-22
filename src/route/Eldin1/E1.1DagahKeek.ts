import { Chest, detail, ShrineBlessing, split, step } from "../create";
import { cps, important, itm, npc, txt } from "../types";
import { wb } from "../windbomb";

export const DagahKeek = [
	important("EQUIP ZORA"),
	step("WB to ", npc("King")),
	Chest("Lightscale Trident", "Keep for duping"),
	important("EQUIP PHANTOM 3"),
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