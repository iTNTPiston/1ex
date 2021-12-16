import { Boss, Chest,  detail, Equipment, Korok,   MakeTOD,   Shrine, split, step, VariableChange } from "../create";
import {  txt,  cps, emy, important, itm, v } from "../types";
import { wb } from "../windbomb";

export const KuhTakkar = [
	step(wb(cps)("N + N midair")),
	Korok("G26", "Snowball Golf", "Carry halfway"),
	step("SQ to talus"),
	detail(
		Boss("Frost Talus", "Lynel Bow w/ BA"),
		"Smash the ores as he is getting up"),
	itm("Rare ore for amber"),
	step(wb(cps)("<E to radiant shield")),
	Equipment("Radiant Shield"),
	step(wb(cps)("<E to camp")),
	important("EQUIP PHANTOM"),
	VariableChange({tail: 4}),
	detail(
		txt("Kill 5 ",emy("Lizalfos")),
		txt("Shoot with lynel bow. Tail: ",v("tail"),"/45")),
	Equipment("2 Bows"),
	detail(
		MakeTOD("5am", "Make Morning", "for quests"),
		"For trash girl and ice house"),
	itm("14 wood"),
	Chest("5 Fire Arrows"),
	itm("Luminous Ore"),
	Shrine("Kuh Takkar"),
	split("-"),
];