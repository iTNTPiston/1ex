import { step, Korok, Shrine, split, MakeTOD, ability, Warp } from "../create";
import { cps, gale, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const RinOyaa = [
	step(wb(cps)("S")),
	Korok("H16", "Balloon", "Bomb tree"),
	step(wb(cps)("W midair")),
	Korok("H15", "Block Puzzle"),
	step(wb(cps)("S + .W midair")),
	Korok("H22", "Boulder Golf", "3 2H STS arrow"),
	step(wb(cps)("SW Low")),
	Korok("H37", "Light Chase"),
	step(wb(cps)("SE")),
	itm("5 Wood"),
	txt("Talk to ", npc("Stalhorse Lady"), " twice"),
	Shrine("Rin Oyaa"),
	split("-"),

	MakeTOD("9pm", "Make Night TWICE", "Dinraal (Claw) and Stalnox"),
	step(wb(cps)("<W Turn")),
	Korok("H52", "Acorn in Log"),
	step(wb(cps)("E> Turn")),
	Korok("H58", "Lift Rock Blocked", "Under leaves"),
	step(wb(cps)("<S")),
	Korok("H62", "Balloon", "1 below 2 behind"),
	step("Dinraal (above)"),
	step(wb(cps)("E (2nd hole)")),
	Korok("K12", "Lift Rock Blocked", "Under rubble"),
	ability(step(gale(), " + ", cps("<W")), {gale: 1}),
	Korok("H59", "Boulder Golf"),
	step(wb(cps)("N> Turn")),
	Korok("H38", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("E> Turn")),
	Korok("K10", "Block Puzzle", "Cube behind right group"),
	Warp("Dagah Keek", txt("Check ", v("krk"), " Koroks")),
	split("-"),
];