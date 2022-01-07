import { step, Korok, split, ShrineBlessing, ability, MakeTOD } from "../create";
import { cps, gale, npc, txt } from "../types";
import { wb } from "../windbomb";

export const SumaSahma = [
	step(wb(cps)("N + E midairs HIGH")),
	Korok("W54", "Lift Rock"),
	step(wb(cps)("S> Turn")),
	Korok("W59", "Ice Block", "3 Fire Arrows"),
	step(wb(cps)("E Slight left turn")),
	Korok("W64", "Rock Circle"),
	ability(gale(), {gale: 1}),
	Korok("W60", "Ice Block", "3 Fire Arrows"),
	step(wb(cps)(".N")),
	txt(npc("Diary"), " (1113)"),
	MakeTOD("9pm","Make Night", "After shrine appears"),
	ShrineBlessing("Suma Sahma"),
	split("-"),

];