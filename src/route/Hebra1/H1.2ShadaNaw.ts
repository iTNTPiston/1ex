import { step, ability, Boss, Korok, Shrine, split } from "../create";
import { important, cps, fury, gale, txt, itm } from "../types";
import { wb } from "../windbomb";

export const ShadaNaw = [
	important("EQUIP SNOW + ATK 2"),
	step("Glide up and south"),
	wb(cps)("N>"),
	ability(Boss("Frost Talus", txt(fury(), itm(" Opal"))), {fury: 3}),
	ability(step(gale(), " + ", cps("N")), {gale: 1}),
	Korok("H54", "Lift Rock"),
	step(wb(cps)("E> Turn + E midair")),
	Korok("H55", "Balloon"),
	step(wb(cps)("N + N midair")),
	Korok("H43", "Acorn in Log"),
	step(wb(cps)("N midair + <N midair")),
	Korok("H27", "Balloon"),
	step(wb(cps)("NE + E midair")),
	Shrine("Shada Naw"),
	split("-"),
];