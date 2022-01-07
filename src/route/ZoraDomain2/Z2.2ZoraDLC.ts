import { Warp, step, Korok, ShrineDLC, Chest, split, MakeTOD, detail, ability, Boss, VariableChange, Shrine, Equipment, Cook } from "../create";
import { npc, cps, fury, itm, txt, gale, v, important } from "../types";
import { wb } from "../windbomb";
import { MONUMENT } from "../ZoraDomain1/Z1.4Ruta";

export const ZoraDLC = [
	Warp("Sato Koda", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	detail(
		step(Equipment("Moblin Club")),
		"Kill the moblin"),
	step(wb(cps)("<E Turn")),
	Chest("Zora Helm"),
	step(wb(cps)("E DEFUSE")),
	Korok("Z05", "Light Chase"),
	step(wb(cps)("<W Turn")),
	...MONUMENT,
	step(wb(cps)("E> Turn")),
	important("EQUIP ZORA ARMOR"),
	"Start Ring Chase",
	detail(
		itm("2 Lotus if need"),
		"24+ Horns"),
	...MONUMENT,
	detail(
		itm("2 Lotus if need"),
		"24-25+ Horns"),
	ShrineDLC("Mah Eliya"),
	split("-"),

	step(wb(cps)("<E")),
	Korok("Z08", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("<W TS")),
	Korok("Z17", "Confetti", "Top of ZD"),

	"Drop down",
	detail(
		itm("4 Lotus if need"),
		"25+ Horns"),
	detail(
		Cook("Speed Food", "If short on speed"),
		"Only if needed. Next fast cooking location is Shae Loya (Tabantha Bridge Stable). Next slowish cooking location is Woodland Stable"),
	detail(
		npc("Frog Boy Twice"),
		"For ZD2 CHECK 7AM - 8PM. Frog Boy: <4PM near statue. >4PM near Fronk"),
	npc("Luminous Stone Guy Twice"),
	"Run up stairs and jump over",
	npc("Letter Girl"),
	npc("Diving Quest"),
	npc("Hinox Lady Twice"),
	npc("Monument Guy Twice"),
	npc("Kapson"),
	npc("Lynel Lady Twice"),
	step(wb(cps)("E>")),
	Korok("Z18", "Block Puzzle"),
	step(wb(cps)("S")),
	Korok("Z26", "Lift Rock", "Peak"),
	step(wb(cps)("E> Turn")),
	detail(
		ability(Boss("Luminous Talus", txt(fury())), {fury: 3}),
		"Fury should be back bc of ring chase"),
	important("BURN OUT FURY"),
	step(wb(cps)("<E")),
	Korok("Z27", "Block Puzzle"),
	step(wb(cps)("N")),
	"Start Flower Chase",
	Korok("Z19", "Boulder Golf", "Magnesis"),
	cps("E."),
	Korok("Z20", "Flower Chase"),
	step(wb(cps)("<N Turn")),
	Korok("A55", "Lift Rock Blocked", "Under Boulder"),
	step(wb(cps)("<N")),
	Korok("A54", "Balloon", "Pre BT left of tree"),
	step(wb(cps)("<E Turn")),
	Korok("A53", "Match Tree", "Middle"),
	step(wb(cps)("E Turn")),
	Korok("Z07", "Lift Rock", "On pillar"),
	VariableChange({rushroom: 5}),
	detail(
		itm("5 Rushrooms"),
		txt(v("rushroom"), "/55")),
	Korok("Z06", "Lift Rock", "Wood Platform"),
	step(wb(cps)("N")),
	Korok("Z01", "Flower Chase"),
	Shrine("Kah Mael"),
	split("-"),

	MakeTOD("5am", "Make Morning"),
	ability(step(gale(), " + ", wb(cps)("SE")), {gale: 1}),
	ShrineDLC("Kee Dafunia"),
	split("-"),


];