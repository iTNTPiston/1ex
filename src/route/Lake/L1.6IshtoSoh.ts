import { Boss, detail, Korok, MakeTOD, Shrine, split, step, VariableChange } from "../create";
import { cps, fury, gale, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const IshtoSoh = [
	step(MakeTOD("9pm", "Make Night", "2 Stalnox")),
	//TODO: palm fruit?
	"SQ DEFUSE",
	Korok("L86", "Lift Rock Blocked", "Under Boulder"),
	step(wb(cps)("<N + NE midair")),
	Boss("Stalnox", txt("3-5 Hits ", fury("3"), " + MS")),
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
	Boss("Stalnox", "6BA + Headshot + MS"),
	step(gale("1"), " ", wb(cps)(".N midair")),
	Korok("L68", "Light Chase"),
	step("cryo ", wb(cps)("NW")),
	Korok("L67", "Balloon"),
	step(wb(cps)("E Turn")),
	Shrine("Ishto Soh"),//52 seeds 50 shrines
	split(),
];