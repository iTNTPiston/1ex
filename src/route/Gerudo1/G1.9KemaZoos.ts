import { ability, indent, Korok, Shrine, split, step } from "../create";
import { cps, gale, npc } from "../types";

export const KemaZoos = [
	step(npc("Boots Guy x4")),
	step("SQ WB to ", npc("Riju")),
	"Talk",
	indent("Thunderhelm"),
	indent(npc("Captain")),
	indent(npc("Historian")),
	indent(npc("Bar Lady")),
	indent(npc("Trash Girl")),
	step(cps("N."), " Turn to Ice House"),
	"BLSS ice to end",
	step(cps(".W"), " Turn"),
	Korok("W36", "Match Cactus", "Land"),
	ability(step(gale(), " + ", cps("NW")), {gale: 1}),
	Korok("W28", "Race", "On some pillars"),
	step(cps("NW")),
	Korok("W18", "Confetti", "Top of skeleton (pinwheel)"),
	step("WB along skeleton"),
	Korok("W13", "Confetti", "Highest fin on skeleton"),
	step("WB along skeleton"),
	Korok("W09", "Confetti", "Highest fin on skeleton"),
	step("Drop down"),
	Shrine("Kema Zoos"),
	split("-"),

];