import { step, Korok, split, MakeTOD, ShrineBlessing, ability } from "../create";
import { cps, gale, important } from "../types";
import { wb } from "../windbomb";

export const DilaMaag = [
	step(cps("S")),
	Korok("W40", "Lift Rock", "Top of statue"),
	step(wb(cps)("E> Turn")),
	Korok("W48", "Block Puzzle"),
	MakeTOD("12pm", important("Make Noon")),
	step(wb(cps)("E + E midair")),
	Korok("W49", "Block Puzzle"),
	step(wb(cps)("E + NE midair")),
	Korok("W46", "Lift Rock Blocked", "Corner"),
	ability(gale(), {gale: 1}),
	Korok("W47", "Rock Circle"),
	step(wb(cps)("<W Turn + W midair")),
	Korok("W50", "Lift Rock", "Top of big pillar"),
	step(wb(cps)("S> Turn to race start")),
	Korok("W58", "Race", wb(cps)("S Turn")),
	step(wb(cps)("NE")),
	ShrineBlessing("Dila Maag"),
	split("-"),
];