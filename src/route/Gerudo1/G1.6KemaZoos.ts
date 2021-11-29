import { image, indent, Korok, Shrine, split, step, Warp } from "../create";
import { cps, important, itm, npc, txt } from "../types";
import Gerudo1Image2 from "./Gerudo1-2.png";

export const KemaZoos = [
	image(
		step("Talk to ", npc("Boots Guy")),
		Gerudo1Image2),
	txt("Equip ", itm("Snow Boots")),
	step("SQ WB to ", npc("Riju")),
	"Talk",
	indent("Thunderhelm"),
	indent(npc("Captain")),
	indent(npc("Guard at door")),
	indent(npc("Historian")),
	indent(npc("Bar Lady")),
	indent(npc("Trash Girl")),
	step(cps("N."), " Turn to Ice House"),
	"BLSS ice to end",
	step(cps(".W"), " Turn + ", cps("W"), " midair"),
	Korok("W36", "Match Cactus", "Shoot left midair"),
	important("DEFUSE SQUARE"),
	step(cps("NW"), " midair"),
	Korok("W28", "Race", "On some pillars"),
	step(cps("NW")),
	Korok("W18", "Confetti", "Top of skeleton (pinwheel)"),
	step("WB along skeleton"),
	Korok("W13", "Confetti", "Highest fin on skeleton"),
	step("WB along skeleton"),
	Korok("W09", "Confetti", "Highest fin on skeleton"),
	step("Drop down"),
	Shrine("Kema Zoos"),
	split(),
	Warp("Hateno Tech Lab"),
	split(),
];