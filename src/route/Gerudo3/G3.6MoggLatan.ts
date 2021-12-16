import { step, Korok, Shrine, split } from "../create";
import { cps } from "../types";
import { wb } from "../windbomb";

export const MoggLatan = [
	step(wb(cps)("N>")),
	Korok("W01", "Lift Rock"),
	step(wb(cps)("<W + W midairs + N>")),
	Korok("G12", "Block Puzzle"),
	step(wb(cps)("NE")),
	Korok("G10", "Rock Circle"),
	step(wb(cps)("E + S")),
	Korok("G13", "Confetti", "Top of tree"),
	step(wb(cps)("E + SE")),
	Korok("G19", "Rock Circle"),
	step(wb(cps)("N> Turn")),
	Shrine("Mogg Latan"),
	split("-"),
];