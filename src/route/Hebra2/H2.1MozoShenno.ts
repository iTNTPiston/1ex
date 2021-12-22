import { ability, Boss, Korok, ShrineDoubleSword, split, step } from "../create";
import { cps, txt, fury, itm } from "../types";
import { wb } from "../windbomb";

export const MozoShenno = [
	step(wb(cps)("S. Turn")),
	Korok("H33", "Ice Block"),
	"SQ or run to talus",
	ability(Boss("Frost Talus", txt(fury(), itm(" Opal"))), {fury: 3}),
	step(wb(cps)("W + W midair")),
	ShrineDoubleSword("Mozo Shenno"),
	split("-"),
];