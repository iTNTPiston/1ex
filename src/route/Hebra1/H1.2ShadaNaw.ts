import { step, ability, Boss, Korok, Shrine, split } from "../create";
import { important, cps, fury, gale, txt, itm } from "../types";
import { wb } from "../windbomb";

export const ShadaNaw = [
	step("Glide up"),
	ability(step(gale(), " + ", cps("E")), {gale: 1}),
	ability(Boss("Frost Talus", txt(fury(), itm(" Opal"))), {fury: 3}),
	ability(step(gale(), " + ", cps("N")), {gale: 1}),
	Korok("H54", "Lift Rock"),
	step(wb(cps)("E> Turn + E midair")),
	Korok("H55", "Balloon"),
	step(wb(cps)("N + N midair")),
	Korok("H43", "Acorn in Log"),
	step(wb(cps)("NE midair")),
	Korok("H34", "Ice Block"),
	"Surf down",
	Korok("H33", "Ice Block"),
	"SQ/Run to talus",
	Boss("Frost Talus", "6 BA"),
	step(wb(cps)("W + W")),
	Korok("H27", "Balloon"),
	step(wb(cps)("NE + E midair")),
	Shrine("Shada Naw"),
	split("-"),
];