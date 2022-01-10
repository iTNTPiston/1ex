import { detail, ability, Icon, split, step, Discover, Korok, Shrine, Warp } from "../create";
import { important, fury, gale, cps, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const Rudania2 = [
    Warp("Vah Rudania", txt("Check ", v("krk"), " Koroks")),
    split("-"),
    
    important("EQUIP FLAME 2"),
	detail(
        ability(Icon("rudania-plus", "Fireblight 2", fury()), {fury: 3}),
        "If you become too fast for fury to come back for waterblight 2, don't use fury for fireblight"),
	split("-"),
    
	step("Ring Race"),
	Discover("Sharo Lun Shrine"),
	"SQ down",
	Discover("Shadow Hamlet Ruins"),
	step(wb(cps)("N + N> midairs")),
	Korok("E12", "Block Puzzle"),
	step(wb(cps)("S Turn")),
	Korok("A25", "Confetti", "Top of tree"),
	step(wb(cps)("S> Turn + S midairs")),
	Shrine("Ze Kasho"),
	split("-"),

	step(wb(cps)("E")),
	npc("Big Sister (112)"),
	detail(
        npc("Little Sister"),
        "8 AM - 8 PM"),
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
    wb(cps)("E"),
	Korok("A38", "Flower Chase", "On bridge"),
];
