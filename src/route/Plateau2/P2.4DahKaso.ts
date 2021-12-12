import { step, Korok, Equipment, split, Boss, Warp, detail, ShrineSword } from "../create";
import { cps, fury, txt, v } from "../types";
import { wb } from "../windbomb";

export const DahKaso = [
	step(wb(cps)("<W")),
	Korok("C85", "Lift Rock (Tree)"),
	step(wb(cps)("SW to ledge")),
	Korok("R80", "Lift Rock"),
	step(wb(cps)("<E Turn")),
	Equipment("Moblin Club"),
	"Run",
	Korok("C86", "Lift Rock"),
	step(wb(cps)("S> Turn")),
	Korok("F29", "Block Puzzle"),
	step(wb(cps)("<E Turn")),
	Korok("C87", "Basketball"),
	step(cps(".S")),
	Korok("C89", "Basketball"),
	step(wb(cps)("W>>> Ordinal Turn")),
	ShrineSword("Dah Kaso"),
	split("-"),

	step(cps("S")),
	detail(
		Boss("Blue Hinox", "6 Hits SLAM"),
		txt("Or ", fury("1-3"), " if have")),
	"Run",
	Korok("C88", "Lily Pads"),
	Warp("Kuh Takkar 32.19%", txt("Check ", v("krk"), " Koroks")),
];