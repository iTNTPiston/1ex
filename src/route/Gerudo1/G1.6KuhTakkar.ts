import { ability, Boss, Chest,  detail, Equipment, Korok, MakeTOD, Shrine, Snap, split, step, VariableChange } from "../create";
import {  txt,  cps, emy, important, itm, v, fury } from "../types";
import { wb } from "../windbomb";

export const KuhTakkar = [
	step(wb(cps)("E + S midair")),
	Korok("G09", "Rock Circle"),
	step(wb(cps)("<W to sword")),
	Snap("Big Sword", "Quest"),
	step(wb(cps)("<S turn")),
	detail(
		Boss("Rare Talus", "6 BA Lynel Bow "),
		"Get amber/flint if you need"),
	step(wb(cps)("N + N midair")),
	important("EQUIP ATK 3"),
	Korok("G26", "Snowball Golf", "Carry halfway"),
	step("SQ to talus"),
	important("EQUIP ATK 3"),
	detail(
		Boss("Frost Talus", txt("Lynel Bow w/ BA ", itm("Parts"))),
		"Smash the ores as he is getting up. You want to pick up all forst talus parts for Opals. Get to 6-8 ambers here"),
	itm("Rare ore for amber"),
	step(wb(cps)("<E to camp")),
	VariableChange({tail: 4}),
	detail(
		txt("Kill 5 ",emy("Lizalfos")),
		txt("Shoot with lynel bow. Tail: ",v("tail"),"/45")),
	detail(
		Equipment("2 Steel Lizal Bows"),
		"Bow Inventory: RGB, Lynel, Swallow, Falcon, GEB, Lizal, Duplex (later)"),
	itm("14 wood"),
	Chest("5 Fire Arrows"),
	detail(
		MakeTOD("5am", "Make Morning", "for quests"),
		"For trash girl and ice house. If the blue lizalfos noticed you, kill him."),
	detail(
		itm("Luminous Ore"),
		"Get as you melt the ice"),
	Shrine("Kuh Takkar"),
	split("-"),
	
];