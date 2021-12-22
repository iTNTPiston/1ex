import { detail, Discover, Korok, MakeTOD, Shrine, ShrineDoubleSword, split, step, Warp } from "../create";
import { cps, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const ShaeLoya = [
	step(cps("N")),
	Korok("R38", "Match Tree", "Right tree"),
	step(cps("S>")),
	Korok("R47", "Balloon"),
	step(wb(cps)("W> Turn")),
	Korok("R37", "Lift Rock", "Ledge"),
	step(wb(cps)("W + SW midair")),
	txt("Talk to ", npc("Kass")),
	MakeTOD("9pm", "Make Night"),
	detail(
		important("UNEQUIP CLOTH"),
		"No need to reequip until OHO overloaded"),
	ShrineDoubleSword("Mijah Rokee"),
	split("-"),

	step(cps("<N")),
	Shrine("Shae Loya"),
	split("-"),

	step(MakeTOD("5am", "Make Morning", "Twice for Dinraal")),
	"SQ to bridge",
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
	Warp("Da Hesho", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	
	step(wb(cps)("N> to Tarry Town")),
	"Give 20 Wood",
	wb(cps)("E"),
	Korok("A38", "Flower Chase", "On bridge"),
	Warp("SOR", txt("Check ", v("krk"), " Koroks")),
	split("-"),
];