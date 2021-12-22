import { step, Korok, Equipment, split, Boss, Warp, detail, ShrineSword, Discover } from "../create";
import { cps, txt, v } from "../types";
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
	Korok("G29", "Block Puzzle"),
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
		txt("Or 3 FURY if have")),
	"Run",
	Korok("C88", "Lily Pads", "Cryo"),
	step(wb(cps)("S")),
	Discover("Gerudo Canyan Pass"),
	Warp("Kuh Takkar", txt("Check ", v("krk"), " Koroks")),
	split("-"),
];