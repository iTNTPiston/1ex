import { Equipment, split, step, Tower, VariableSet } from "../create";
import { cps, gale, txt } from "../types";

export const GerudoTower = [
	step(cps("<W"), " TS to yiga front door"),
	"Shoot bomb arrow 3 archers",
	Equipment("Duplex Bow x3"),
	VariableSet({gale: 2}),
	step(gale("1")),
	txt(cps("S"), " + ", cps("<S"), " turn midair"),
	Tower("Gerudo Tower"),
	split(),
];