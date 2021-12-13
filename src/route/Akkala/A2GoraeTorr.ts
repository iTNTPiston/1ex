import { ability, detail, Korok, MakeTOD, ShrineBlessing, Snap, split, step } from "../create";
import { cps, emy, gale, important, itm, txt} from "../types";
import { wb } from "../windbomb";

export const Dinraal = [
	step(MakeTOD("5am", "Morning", "3 Horns")),
	wb(cps)("<E + <E midairs"),
	Korok("K04", "Balloon", "5 around tree"),
	step(wb(cps)("W> Turn")),
	Korok("K01", "Lift Rock", "On peak FAR"),
	step(cps("E")),
	"Shoot Horn",
	detail(
		MakeTOD("5am", "Morning"),
		"Make morning right after you pick up the part"),
	Korok("K02", "Block Puzzle"),
	step(wb(cps)("<E Turn")),
	Korok("K03", "Rock Circle"),
	"Shoot Horn",
	detail(
		MakeTOD("5am", "Morning"),
		"Kill this lynel if you don't have a hoof yet"),
	step(wb(cps)("E> Turn")),
	Korok("E01", "Lift Rock Blocked", "Under leaves (Eye)"),
	Snap(emy("Dinraal"), "SNAP Elite"),
	"Shoot Horn",
	Snap("Eldin Skeleton", "Quest"),
	important("CHECK 1S 3H"),
];

export const GoraeTorr = [
	step(wb(cps)("E + E> midair")),
	Korok("E02", "Block Puzzle"),
	txt("Ores for ", itm("Amber"), " if needed"),
	step(cps("NE")),
	txt("Ores for ", itm("Amber/Flint")),
	Korok("E03", "Lift Rock Blocked", "Under Rubble"),
	step(wb(cps)("E> + E midair")),
	Korok("E04", "Lift Rock Blocked", "Under Rubble"),
	step(wb(cps)("E>> Turn, updraft")),
	Korok("E05", "Rock Circle", "Pillars around shrine"),
	"Start Gut Check", 
	ability(txt(gale(), " + midair"), {gale: 1}),
	ShrineBlessing("Gorae Torr"),
	split("-"),
];