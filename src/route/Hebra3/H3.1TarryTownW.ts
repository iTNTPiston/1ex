import { ability, Boss, Discover, Icon, Korok, Shrine, ShrineBlessing, split, step, Warp } from "../create";
import { cps, fury, gale, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const TarryTownWedding = [
	important("EQUIP FLAME 2"),
	Icon("rudania-plus", "Fireblight 2"),
	split("-"),
    
	step("Ring Race"),
	Discover("Sharo Lun Shrine"),
	"SQ down",
	Discover("Shadow Hamlet Ruins"),
	ability(step(gale()), {gale: 1}),
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
	step(wb(cps)("W Turn")),
	Korok("A32", "Match Tree", "Closest tree"),
	step(wb(cps)("<<S Turn")),
	npc("Hudson Once"),
	step(wb(cps)("NE")),
	Korok("A34", "Rock Circle"),
	step(wb(cps)("SE + SE")),
	Korok("A44", "Race", "Run"),
	"Start Flower Chase",
	Korok("A36", "Block Puzzle"),
	Korok("A35", "Flower Chase"),
	npc("READ STONE"),
	"BLSS with orb",
	ShrineBlessing("Ritaag Zumo"),
	split("-"),

	Korok("A33", "Lift Rock Blocked", "Under leaves"),
	wb(cps)("W Turn"),
	ability(Boss("Stalnox", txt("GEB + ", fury())), {fury: 3}),
	Warp("Shada Naw", txt("Check ", v("krk"), " Koroks")),
    
];