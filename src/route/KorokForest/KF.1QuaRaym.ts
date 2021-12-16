import { ability, Boss, detail, Korok, Shrine, split, step } from "../create";
import { txt, npc, cps, itm, gale } from "../types";
import { wb } from "../windbomb";

export const QuaRaym = [
	step(txt("Talk to Shrine ", npc("Brother"), " (21)")),
	txt("Talk to ", npc("Talus Goron Guy"), " twice"),
	txt("Talk to ", npc("Amber Lady")),
	txt("Talk to ", npc("Bludo")),
	ability(step(wb(cps)("S + SE"), " ", gale()), {gale: 1}),
	detail(
		txt("Talk to ", npc("Drillshaft Kid")),
		"8am to 8pm"),
	step(wb(cps)("SE")),
	Korok("E20", "Boulder Golf"),
	step(wb(cps)("<E Turn to talus")),
	Boss("Rare Igneo Talus", txt("Freeze + RGC")),
	"Farm luminous while dying",
	itm("opal/flint"),
	step("<S Turn"),
	Korok("E28", "Balloon", "Aim Above"),
	step(wb(cps)("<W Turn")),
	Shrine("Qua Raym"),
	split("-"),
];