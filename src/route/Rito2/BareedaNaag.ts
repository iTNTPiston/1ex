import { ability, Boss, detail, Discover, Korok, MakeTOD, Shrine, split, step, VariableChange, Warp } from "../create";
import { cps, emy, fury, gale, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const BareedaNaag = [
	VariableChange({rushroom: 1}),
	detail(
		step(itm("Rushroom")),
		txt(v("rushroom"),"/55")),
	detail(
		itm("Pepper"),
		"Pause Unpause for menuing"),
	Korok("T16", "Flower Chase"),
	step(wb(cps)("W> Turn")),
	Korok("T12", "Lift Rock Blocked", "Under leaves"),
	ability(step(gale(), " + ", cps("N>")), {gale: 1}),
	Korok("T09", "Offer Pepper"),
	ability(step(gale(), " + ", cps("E midairs")), {gale: 1}),
	Korok("T10", "Offer Apple"),
	step(wb(cps)("S")),
	Korok("T17", "Race", "Ordinal Low"),
	step(wb(cps)("S>")),
	ability(Boss("Black Hinox", txt("2 GEB + ", fury())), {fury: 3}),
	step(wb(cps)("E>")),
	Shrine("Bereeda Naag"),
	split("-"),

	step(wb(cps)("N> TS")),
	detail(
		npc("Guard"),
		"Walks back and forth on bridge"),
	npc("Spice Guy Twice"),
	itm("50+ Wood"),
    
	step(wb(cps)("S super")),
	Korok("T21", "Lift Rock Blocked", "Under rubble"),
	step(cps("W")),
	Korok("T20", "Block Puzzle"),
	step(wb(cps)("E Turn")),
	Korok("T22", "Lift Rock Blocked", "Under rubble"),
	VariableChange({tail: 2}),
	detail(
		txt("Kill 2 ", emy("Silver Lizalfos")),
		txt(v("tail"), "/45")),
	step(wb(cps)("E Turn + E midair")),
	Korok("R05", "Acorn", "In tree"),
	Discover("Foot Race"),
	step(wb(cps)("S + S")),
	Korok("R13", "Lift Rock", "Top of waterfall"),
	txt("Cryo + shock fish"),
	VariableChange({heartyBass: 5}),
	detail(
		itm("5 Hearty Bass"),
		txt(v("heartyBass"), "/15")),
	step(wb(cps)("S")),
	Korok("R17", "Lift Rock", "Top of mountain"),
	step(wb(cps)("<<S Turn")),
	Korok("R30", "Race", "SQ"),
	step(wb(cps)("<E")),
	Korok("R31", "Balloon", "Aim direct"),
	ability(Boss("Blue Hinox", fury()), {fury: 3}),
	Korok("R22", "Balloon", "Aim direct"),
	step(wb(cps)("W Turn")),
	Korok("R21", "Light Chase"),
	step(wb(cps)("W. Turn")),
	detail(
		npc("Keeha Yoog Guy"),
		"8AM - midnight"),
	detail(
		npc("Fairy Fountain Guy Twice"),
		"5AM - 10PM outside"),
	MakeTOD("5am", "Make Morning Twice", "If missed scale dupe"),
	Warp("Travel Medallion", txt("Check ", v("krk")," Koroks")),
	split("-")
];