import { step, Korok, ability, Boss, Shrine, split } from "../create";
import { cps, fury } from "../types";
import { wb } from "../windbomb";

export const JolooNah = [
	step(wb(cps)("N>")),
	Korok("G36", "Well"),
	step(cps("SE")),
	Korok("W20", "Confetti", "In tree"),
	Korok("W21", "Block Puzzle"),
	step(cps("NW")),
	ability(Boss("Luminous Talus", fury()), {fury:3}),
	step("SQ to end of bridge"),
	Korok("W14", "Lift Rock"),
	step(cps("N + <N midair")),
	Korok("W07", "Block Puzzle", "DEFUSE"),
	"Drop down summon horse",
	"Sell white horse",
	step(cps("N.")),
	Shrine("Joloo Nah"),
	split("-"),
];