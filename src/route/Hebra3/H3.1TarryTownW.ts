import { ability, Cook, detail, Discover, Icon, Korok, MakeTOD, Shrine, split, step, Warp } from "../create";
import { cps, fury, gale, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const TarryTownWedding = [
	important("EQUIP FLAME 2"),
	detail(
		ability(Icon("rudania-plus", "Fireblight 2", fury()), {fury: 3}),
		"If fury is not back just don't use it"),
	split("-"),
    
	ability(step("Ring Race ", gale()), {gale: 1}),
	Discover("Sharo Lun Shrine"),
	"SQ down",
	Discover("Shadow Hamlet Ruins"),
	ability(step(gale(), " + ", wb(cps)("NE + N")), {gale: 1}),
	Korok("E12", "Block Puzzle"),
	step(wb(cps)("S Turn")),
	Korok("A25", "Confetti", "Top of tree"),
	step(wb(cps)("S> Turn + S midairs")),
	Shrine("Ze Kasho"),
	split("-"),

	step(wb(cps)("E")),
	npc("Big Sister (112)"),
	npc("Little Sister"),
	npc("Big Sister"),
	npc("Little Sister"),
	npc("Big Sister"),
	step(wb(cps)("N> Turn")),
	Korok("A30", "Light Chase"),
	step(wb(cps)("<E Turn")),
	Korok("A31", "Lift Rock Blocked", "Under leaves"),
	step(wb(cps)("E Turn")),
	Korok("A32", "Match Tree", "Closest tree"),
	step(wb(cps)("<<S Turn")),
	npc("Hudson Once"),
	Cook("Speed"),
	MakeTOD("9pm", "Make Night", "If need for stalnox"),
	Warp("Shada Naw", txt("Check ", v("krk"), " Koroks")),
	split("-"),
    
];