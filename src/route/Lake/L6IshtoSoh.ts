import { ability, Boss, detail, Korok, MakeTOD, Shrine, split, step, VariableChange } from "../create";
import { cps, fury, gale, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const IshtoSoh = [
	step(MakeTOD("9pm", "Make Night", "2 Stalnox")),
	"SQ DEFUSE",
	Korok("L86", "Lift Rock Blocked", "Under Boulder"),
	step(wb(cps)("<N + NE midair")),
	ability(Boss("Stalnox", txt("GEB + ", fury())), {fury: 3}),
	step(wb(cps)("<W to archery")),
	"Summon horse",
	detail(
		"Buy all arrows (111)",
		"Use normal arrows on all balloons except for last 5. For the 2 closer you can shoot one to hit both with GEB"),
	"Score 23 and 20",
	step(wb(cps)(".S Slight Turn")),
	Korok("L85", "Rock Circle"),
	step(cps(".W")),
	Korok("L83", "Lift Rock Blocked", "Under Rubble"),
	"Run+glide to palm tree",
	Korok("L82", "Confetti", "Top of palm tree"),
	Korok("L84", "Light Chase"),
	step(wb(cps)("W High")),
	VariableChange({rushroom: 2}),
	detail(
		itm("2 Rushrooms"),
		txt("Rushroom ", v("rushroom"), "/55")),
	Korok("L81", "Lift Rock"),
	step("Drop down ", wb(cps)("W midair")),
	Korok("L80", "Race", "SQ DEFUSE"),
	step(wb(cps)("W> Turn + W midair")),
	detail(
		ability(Boss("Stalnox", txt("3-5 Hits ", fury())), {fury: 1}),
		"Ignore warning: fury is back since we do the minigame"),
	ability(step(gale(), " ", wb(cps)(".N midair")), {gale: 1}),
	Korok("L68", "Light Chase"),
	step("cryo ", wb(cps)("NW DEFUSE")),
	Korok("L67", "Balloon"),
	step(wb(cps)("E Turn")),
	Shrine("Ishto Soh"),
	split("-"),
];