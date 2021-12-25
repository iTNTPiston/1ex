import { ability, Boss, detail, Korok, Shrine, split, step, VariableChange } from "../create";
import { cps, fury, gale, itm, txt, v } from "../types";
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
	
];