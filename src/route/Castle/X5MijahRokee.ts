import { detail, Korok, MakeTOD, ShrineDoubleSword, split, step, Warp } from "../create";
import { cps, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const MijahRokee = [
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

	Warp("Da Hesho", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	step(wb(cps)("N> to Tarry Town")),
	"Give 20 Wood",
	wb(cps)("E"),
	Korok("A38", "Flower Chase", "On bridge"),

	Warp("SOR", txt("Check ", v("krk"), " Koroks")),
	split("-"),

];