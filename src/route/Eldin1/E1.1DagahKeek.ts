import { Chest, detail, Shrine, split, step } from "../create";
import { cps, important, itm, npc, txt } from "../types";
import { wb } from "../windbomb";
import { MONUMENT } from "../ZoraDomain1/Z1.4Ruta";

export const DagahKeek = [
	important("EQUIP ZORA"),
	step("WB to ", npc("King")),
	Chest("Lightscale Trident", "Keep for duping"),
	npc("Diving Quest"),//TODO ZD2 to save menuing maybe?
	important("EQUIP PHANTOM 3"),
	txt("Talk to ", npc("Song Girl")),
	detail(
		txt("Talk to ", npc("Wife Guy")),
		"Goes to pillar at 7AM, goes to SPA area at 8pm"),
	step(wb(cps)("<N + N midair")),
	...MONUMENT,
	step(wb(cps)("S> DT")),
	detail(
		"Activate Shrine",
		"Don't use the trident afterwards. Keep for duping."),
	itm("1 Lotus Seed"),
	Shrine("Dagah Keek"),
	split(),
];