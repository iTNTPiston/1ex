import { detail, Korok, ShrineDoubleSword, split, step, Warp } from "../create";
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
	detail(
		important("UNEQUIP CLOTH"),
		"Make night if you need. No need to reequip until OHO overloaded"),
	ShrineDoubleSword("Mijah Rokee"),
	split("{Narueruko Casblood}"),

	Warp("Da Hesho", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	step(wb(cps)("N> to Tarry Town")),
	"Give 20 Wood",
	Warp("SOR", txt("Check ", v("krk"), " Koroks")),
	split("-"),

];