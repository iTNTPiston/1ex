import { step, Korok, ability, Boss, Shrine, split } from "../create";
import { cps, fury, v } from "../types";
import { wb } from "../windbomb";

export const JeeNoh = [
	step(wb(cps)("E")),
	Korok("L69", "Block Puzzle"),
	step( wb(cps)("N + N midairs")),
	ability(Boss("Luminous Talus", fury()), {fury: 2}),
	step(wb(cps)("W Turn")),
	Korok("L41", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)(".E Turn")),
	Korok("L37", "Acorn in Log"),
	step(wb(cps)("N midairs")),
	Korok("L23", "Confetti", "Top of tree"),
	step(wb(cps)("<N Turn")),
	Korok("P17", "Lift Rock"),
	"Run to slab",
	Korok("P16", "Lift Rock Blocked", "Slab 1 STS hit"),
	step(wb(cps)("<W DT")),
	Korok("W22", "Balloon"),
	step(wb(cps)("<W Turn")),
	Korok("W27", "Balloon"),
	step(wb(cps)("W")),
	Korok("W26", "Block Puzzle"),
	"Surf to shrine below",
	Shrine("Jee Noh"),
	split("{4 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),
];