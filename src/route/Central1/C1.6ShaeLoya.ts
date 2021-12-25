import { step, Korok, VariableChange, detail, ability, Boss, MakeTOD, split, Warp, Shrine, Discover } from "../create";
import { cps, txt, itm, v, fury, npc } from "../types";
import { wb } from "../windbomb";

export const ShaeLoya = [
	step(wb(cps)("E + E midairs")),
	Korok("R13", "Lift Rock", "Top of waterfall"),
	txt("Cryo + shock fish"),
	VariableChange({heartyBass: 5}),
	detail(
		itm("5 Hearty Bass"),
		txt(v("heartyBass"), "/15")),
	step(wb(cps)("S")),
	Korok("R17", "Lift Rock", "Top of mountain"),
	step(wb(cps)("<<S Turn")),
	Korok("R30", "Race", "SQ"),
	step(wb(cps)("<E")),
	Korok("R31", "Balloon", "Aim direct"),
	ability(Boss("Blue Hinox", fury()), {fury: 3}),
	Korok("R22", "Balloon", "Aim a bit above"),
	step(wb(cps)("W Turn")),
	Korok("R21", "Light Chase"),
	step(wb(cps)("W")),
	Shrine("Shae Loya"),
	split("-"),

	detail(
		npc("Keeha Yoog Guy"),
		"8AM - midnight"),
	detail(
		npc("Fairy Fountain Guy Twice"),
		"5AM - 10PM outside, otherwise inside"),
	MakeTOD("5am", "Make Morning Twice", "If need part"),
	"Run to bridge",
	Korok("T34", "Race", wb(cps)("W Turn")),
	step(wb(cps)("S> Turn")),
	Korok("R28", "Lift Rock Blocked", "Under slab"),
	step(cps("NE")),
	Korok("R20", "Block Puzzle"),
	step(cps("E")),
	Korok("R29", "Lift Rock", "In between rocks"),
	step("SQ out + ", cps("N")),
	Discover("Tanagar Canyon Course"),
	wb(cps)("N midair"),
	Korok("R12", "Confetti", "Top of flagpole"),
	
	Warp("Vah Rudania"),
	split("-"),

];