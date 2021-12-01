import { step, Korok, split, Tower } from "../create";
import { cps, gale } from "../types";
import { wb } from "../windbomb";

export const EldinTower = [
	step(cps("N>")),
	"GG rock under camp",
	Korok("E34", "Rock Circle"),
	"Run down",
	Korok("E30", "Block Puzzle"),
	step(cps("W")),
	Korok("E29", "Basketball"),
	step(wb(cps)("S> + W midair")),
	Korok("E32", "Lift Rock Blocked", "Under rubble"),
	step("SQ SE to race start DEFUSE"),
	Korok("E33", "Race", wb(cps)("M> Turn")),
	step(gale("1"), " + midairs"),
	Tower("Eldin Tower"),
	split(),
];