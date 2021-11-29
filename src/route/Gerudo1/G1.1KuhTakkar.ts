import { image, Korok, Section, Shrine, split, step } from "../create";
import { cps, itm } from "../types";

import Gerudo1Image1 from "./Gerudo1-1.png";

export const KuhTakkar = [
	Section("GERUDO 1"),
	image(
		step(cps(".S"), " TS + ", cps("S")," midair to rock"),
		Gerudo1Image1),
	Korok("G19", "Rock Circle", "Rock is above"),
	step(cps("W>>")," around mountain + ", cps("W")),
	Korok("G13", "Confetti", "Top of tree"),
	step(cps("N"), " + ", cps("W"), " midair"),
	Korok("G10", "Rock Circle"),
	step(cps("W")," + ", cps("S"), " midair"),
	Korok("G12", "Block Puzzle"),
	step(cps("<<<S"), " ordinal turn"),
	itm("Luminous Stones"),
	Shrine("Kuh Takkar"),
	split(),
];