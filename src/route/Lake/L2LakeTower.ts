import { ChestSpecial, detail, Korok, MakeTOD, split, step, Tower, VariableChange } from "../create";
import { cps, txt, npc, gale, important, emy, itm, v } from "../types";
import { wb } from "../windbomb";

export const LakeTower = [
	step(cps("E")),
	txt("Talk to ", npc("Wife")),
	step(cps("<E")),
	Korok("L26", "Tree Branch"),
	"Glide down to broken pillar",
	Korok("L15", "Balloon", "In pillar"),
	Korok("L14", "Lift Rock Blocked", "Under slab (STS a lot)"),
	MakeTOD("9pm", "Make Night if rain"),
	step(gale("1"), " + ", wb(cps)("N midair")),
	Korok("D54", "Torch"),
	"Drop down",
	Korok("L09", "Basketball"),
	step(wb(cps)("<S Turn to bridge center")),
	important("LOOK SKY SOUTH"),
	Korok("L27", "Confetti", "Top of fountain"),
	"Watch chest land",
	"Run to flower",
	Korok("L30", "Flower Chase"),
	"Drop down",
	Korok("L31", "Lift Rock"),
	step(cps("E")),
	Korok("L32", "Metal Box Circle"),
	step(wb(cps)("<E Turn")),
	Korok("L33", "Balloon"),
	step(wb(cps)("<W Turn")),
	ChestSpecial("Xenoblade Chest"),
	step("SQ ", cps("<S")),
	Korok("L39", "Lift Rock"),
	step(cps("E")),
	Korok("L40", "Acorn", "In tree"),
	step(cps("E>")),
	Korok("L44", "Boulder Golf", "Bomb in"),
	step(wb(cps)("W Turn")),
	Korok("L42", "Boulder Golf", "Bomb in"),
	"Surf down",
	Korok("L43", "Light Chase"),
	step(wb(cps)("W")),
	Korok("L51", "Boulder Golf", "2 STS + bomb in"),
	step(cps("W")),
	txt("Kill 2 archer ", emy("Lizalfos")),
	VariableChange({rushroom: 8}),
	detail(
		itm("8 Rushrooms"),
		txt("Knock down with blizzard rod. ", v("rushroom"), "/55")),
	step(cps("W"), " + ", gale("2")),
	Tower("Lake Tower", "41.48%"),
	split("{4 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),
    
];