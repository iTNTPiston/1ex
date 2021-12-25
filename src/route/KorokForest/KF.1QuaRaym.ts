import { ability, Boss, detail, Korok, Shrine, split, step } from "../create";
import { txt, npc, cps, itm, fury } from "../types";
import { wb } from "../windbomb";

export const QuaRaym = [
	step(txt("Talk to Shrine ", npc("Brother"), " (21)")),
	txt("Talk to ", npc("Talus Goron Guy"), " twice"),
	txt("Talk to ", npc("Amber Lady")),
	txt("Talk to ", npc("Bludo")),
	step(wb(cps)("S + <S")),
	detail(
		txt("Talk to ", npc("Drillshaft Kid")),
		"8am to 8pm"),
	step(wb(cps)("E> to talus")),
	ability(Boss("Rare Igneo Talus", fury()), {fury: 3}),
	"Farm luminous while dying",
	itm("opal/flint"),
	step(wb(cps)("<S Turn")),
	Korok("E28", "Balloon", "Aim Above"),
	step(wb(cps)("<W Turn")),
	Shrine("Qua Raym"),
	split("-"),
];