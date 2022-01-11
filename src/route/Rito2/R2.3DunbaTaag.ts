import { step, detail, Korok, Discover, VariableChange, ability, Boss, MakeTOD, Warp, split, ShrineBlessing, Shrine } from "../create";
import { cps, npc, itm, txt, v, fury, gale, important } from "../types";
import { wb } from "../windbomb";

export const DunbaTaag = [
	step(wb(cps)("NE")),
	detail(
		npc("Guard TWICE"),
		"At end of bridge closer to Rito Village"),
	important("CHECK 50 WOOD"),
    
	step(wb(cps)("<S super")),
	detail(
		Korok("T21", "Lift Rock Blocked", "Under rubble"),
		"Stay to the left of the middle of the rubble, otherwise you would open the chest"),
	step(cps("<W")),
	Korok("T20", "Block Puzzle"),
	step(wb(cps)("E")),
	Korok("T22", "Lift Rock Blocked", "Under rubble"),
	MakeTOD("5am", "Make Night Twice", "Dinraal (Claw) & Stalnox"),
	step(wb(cps)("<S Turn + E midair")),
	Korok("R05", "Acorn", "In tree"),
	Discover("Foot Race"),
	step(wb(cps)("N> Turn")),
	"Shoot Dinraal",
	detail(
		"CHECK ALL DINRAAL",
		"Can get all parts here if you don't want to do the forgotten temple backups"),
	"Drop down",
	Korok("R04", "Rock Circle", "In Canyon"),
	ability(step(gale(), " + ", cps("W")), {gale: 1}),
	Korok("H73", "Race", cps("<N")),
	VariableChange({rushroom: 1}),
	detail(
		itm("Rushroom"),
		txt(v("rushroom"), "/55")),
	Shrine("Dunba Taag"),
	split("-"),

	Warp("Travel Medallion", txt("Check ", v("krk")," Koroks")),
	split("-"),

	npc("Hudson Twice"),
	step(wb(cps)("N. Turn")),
	Korok("A34", "Rock Circle", "Rock in bush"),
	step(wb(cps)("SE + SE")),
	Korok("A44", "Race", "Run"),
	"Start Flower Chase",
	Korok("A36", "Block Puzzle"),
	Korok("A35", "Flower Chase"),
	npc("READ STONE"),
	"BLSS with orb",
	ShrineBlessing("Ritaag Zumo"),
	split("-"),

	Korok("A33", "Lift Rock Blocked", "Under leaves"),
	wb(cps)("W Turn"),
	ability(Boss("Stalnox", txt("GEB + ", fury())), {fury: 3}),
	detail(
		Warp("Shada Naw", txt("Check ", v("krk")," Koroks")),
		"Doing 2 koroks here for TOD routing for ZD2"),
	split("-"),
	step(wb(cps)("<E Turn")),
	Korok("H21", "Confetti", "Top of tree"),
	step(wb(cps)("NW Low")),
	Korok("H12", "Rock Circle"),

];