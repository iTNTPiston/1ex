import { step, ability, Boss, Korok, Shrine, split, detail } from "../create";
import { cps, fury, itm, txt } from "../types";
import { wb } from "../windbomb";

export const ShaGehma = [
	step(wb(cps)("S High from pedestal")),
	ability(Boss("Frost Talus", txt(fury(), itm(" Opal"))), {fury: 3}),
	step(wb(cps)("S> Turn")),
	detail(
		Korok("H31", "Ice Block", "2 FA"),
		"Most southern platform"),
	step(wb(cps)("W. Turn")),
	Korok("H29", "Ice Block", "3-4 FA"),
	step(wb(cps)("N> Low Turn")),
	Shrine("Rok Uwog"),
	split("-"),

	step(wb(cps)("N + N> midair")),
	Korok("H13", "Ice Block", "3 FA"),
	step(wb(cps)("NE Low")),
	Korok("H05", "Balloon", "Bomb Arrow (Turn around)"),
	step(wb(cps)("E Turn")),
	Shrine("Sha Gehma"),
	split("-"),
];