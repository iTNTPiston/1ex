import { Warp, step, Korok, split, VariableChange, ingredient, detail, ability, Boss, Shrine, Discover } from "../create";
import { txt, v, cps, emy, npc, fury, important } from "../types";
import { wb } from "../windbomb";

export const JeeNoh = [
	Warp("Kuh Takkar", txt("Check ", v("krk"), " Koroks")),
	split("{Ritruta Rudanicen}"),
	step(wb(cps)("S to camp")),
	VariableChange({tail: 4}),
	detail(
		emy("4 Lizalfos"),
		ingredient("tail", 45)),
	step(wb(cps)("<N Turn")),
	Korok("G12", "Block Puzzle"),
	step(wb(cps)("NE")),
	Korok("G10", "Rock Circle"),
	step(wb(cps)("E + S")),
	Korok("G13", "Confetti", "Top of tree"),
	step(wb(cps)("E + SE")),
	Korok("G19", "Rock Circle"),
	step(wb(cps)("E> Turn")),
	Korok("G24", "Rock Circle"),
	step(wb(cps)("S> Turn to talus")),
	ability(Boss("Luminous Talus", fury()), {fury: 3}),
	detail(
		important("BURN OUT FURY"),
		"You have to burn out fury here for fury to be back for the next talus"),
	step(wb(cps)("NE")),
	VariableChange({tail: 2}),
	detail(
		emy("3 Lizalfos"),
		ingredient("tail", 45)),
	step(wb(cps)("N.")),
	emy("2 Bokos"),
	npc("Friend 1"),
	txt("Drop down 1 ", emy("boko")),
	npc("Friend 2"),
	wb(cps)("E."),
	Shrine("Joloo Nah"),
	split("-"),

	step(wb(cps)("S> Turn")),
	Korok("W07", "Block Puzzle"),
	step(wb(cps)("S")),
	emy("2 Bokos"),
	npc("Friend 3"),
	step(wb(cps)("E. Turn")),
	Discover("Gerudo Canyon Pass"),
	step(wb(cps)("W + W")),
	detail(
		ability(Boss("Luminous Talus", fury()), {fury: 2}),
		"Fury might not be back here. Really tight"),
	step("SQ"),
	Korok("W14", "Lift Rock", "End of bridge"),
	step(wb(cps)("<<S Turn")),
	Korok("W26", "Block Puzzle"),
	Shrine("Jee Noh"),
	split("-"),
];