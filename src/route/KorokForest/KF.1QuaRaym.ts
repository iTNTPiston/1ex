import { Boss, detail, Korok, Shrine, split, step } from "../create";
import { txt, npc, cps, fury, itm } from "../types";
import { wb } from "../windbomb";

export const QuaRaym = [
	step(txt("Talk to Shrine ", npc("Brother"), " (21)")),
	txt("Talk to ", npc("Talus Goron Guy"), " twice"),
	txt("Talk to ", npc("Amber Lady")),
	txt("Talk to ", npc("Bludo")),
	step(wb(cps)("S + SE midair")),
	detail(
		txt("Talk to ", npc("Drillshaft Kid")),
		"8am to 8pm"),
	step(wb(cps)("SE")),
	Korok("E20", "Boulder Golf"),
	step(wb(cps)("<E Turn to talus")),
	Boss("Rare Igneo Talus", txt("RGC atk lv 2 ", fury("3"))),
	"Farm luminous while dying",
	itm("opal/flint"),
	step("SQ SE-ish"),
	Korok("E21", "Block Puzzle"),
	step(wb(cps)("<W turn")," to shrine cave"),
	"Do Quest", 
	Shrine("Kayra Mah"),
	split(),
	step(wb(cps)("S> TS")),
	Shrine("Qua Raym"),
	split(),
];