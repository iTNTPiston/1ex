import { Boss, Chest,  detail, Equipment, Korok, MakeTOD, Shrine, Snap, split, step, VariableChange } from "../create";
import { txt,  cps, emy, itm, v } from "../types";
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
	step(wb(cps)("E> Turn to camp")),
	VariableChange({tail: 4}),
	detail(
		txt("Kill 5 ",emy("Lizalfos")),
		txt("Shoot with GEB. Tail: ",v("tail"),"/45")),
	detail(
		Equipment("2 Steel Lizal Bows"),
		"Bow Inventory: RGB, Lynel, Swallow, Falcon, GEB, Lizal, Duplex (later)"),
	itm("14 wood"),
	Chest("5 Fire Arrows"),
	detail(
		MakeTOD("5am", "Make Morning", "for quests"),
		"For trash girl and ice house."),
	detail(
		itm("Luminous Ore"),
		"Get as you melt the ice"),
	Shrine("Kuh Takkar"),
	split("-"),
	
];