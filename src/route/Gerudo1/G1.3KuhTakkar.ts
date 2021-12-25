import { Boss, Chest,  detail, Equipment, Korok, MakeTOD, step, VariableChange } from "../create";
import {  txt,  cps, emy, important, itm, v } from "../types";
import { wb } from "../windbomb";

export const KuhTakkar = [
	step(wb(cps)("N + N midair")),
	important("EQUIP ATK 3"),
	Korok("G26", "Snowball Golf", "Carry halfway"),
	step("SQ to talus"),
	important("EQUIP ATK 3"),
	detail(
		Boss("Frost Talus", txt("Lynel Bow w/ BA ", itm("Parts"))),
		"Smash the ores as he is getting up. You want to pick up all forst talus parts for Opals"),
	itm("Rare ore for amber"),
	step(wb(cps)("<E to radiant shield")),
	Equipment("Radiant Shield"),
	step(wb(cps)("<E to camp")),
	VariableChange({tail: 4}),
	detail(
		txt("Kill 4 ",emy("Lizalfos")),
		txt("Shoot with lynel bow. Tail: ",v("tail"),"/45")),
	detail(
		Equipment("Steel Lizal Bow"),
		"Bow Inventory: RGB, Lynel, Swallow, Falcon, GEB, Lizal, Duplex (later)"),
	itm("14 wood"),
	Chest("5 Fire Arrows"),
	detail(
		MakeTOD("5am", "Make Morning", "for quests"),
		"For trash girl and ice house"),
	detail(
		itm("Luminous Ore"),
		"Get as you melt the ice"),
	detail("Activate Kuh Takkar", "No need to do (for SCW failure)"),
	
];