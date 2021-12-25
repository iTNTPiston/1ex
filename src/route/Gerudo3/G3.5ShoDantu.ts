import { step, Korok, ability, Boss, Shrine, split } from "../create";
import { cps, fury, important, txt } from "../types";
import { wb } from "../windbomb";

export const ShoDantu = [
	step(wb(cps)("W> + W midairs")),
	Korok("G31", "Balloon"),
	step(wb(cps)("W> Turn")),
	Korok("G30", "Rock Circle"),
	step(wb(cps)("<N Turn")),
	ability(Boss("Luminous Talus", txt(fury()," from block")), {fury: 3}),
	important("BURN OUT FURY"),
	Korok("G21", "Block Puzzle"),
	step(wb(cps)("E> Turn")),
	Shrine("Sho Dantu"),
	split("-")

];