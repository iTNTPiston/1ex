import { Korok, step, VariableChange, detail, ShrineDoubleSword, split, ability, ingredient, Boss, Tower } from "../create";
import { cps, txt, emy, v, gale, itm, important, npc } from "../types";
import { wb } from "../windbomb";

export const KemaKossasa = [
	step(wb(cps)(".W + <N midair")),
	ability(txt(gale(), " + 2 WB up tower"), {gale: 1}),
	step("Talk to ", npc("Kass"), " (21)"),
	Tower("Gerudo Tower"),
	split("-"),

	important("EQUIP ATK 3"),
	step("SQ to balloon"),
	Korok("G31", "Balloon", "Wait in BT"),
	step(wb(cps)("W> Turn")),
	Korok("G30", "Rock Circle"),
	step(wb(cps)("<N Turn")),
	detail(
		Boss("Luminous Talus", "4 BA w/ Lynel Bow"),
		"Move the block and glide+run to it. Get ambers"),
	Korok("G21", "Block Puzzle"),
	step(wb(cps)("E + N")),
	Korok("G16", "Light Chase",),
	step(wb(cps)("W Turn")),
	Korok("G20", "Rock Circle"),
	step(wb(cps)(".N DEFUSE")),
	Korok("G15", "Lift Rock"),
	ability(step(gale()," + ", wb(cps)("<E Turn")), {gale: 1}),
	Korok("G11", "Race", wb(cps)("<E")),
	step(wb(cps)("W> Turn")),
	VariableChange({tail: 2}),
	detail(
		txt("Kill 2 Black ", emy("Lizalfos")),
		txt("tail: ", v("tail"), "/45")),
	step(wb(cps)("<N + W midair")),
	Korok("G07", "Ice Block", "2 Fire Arrows"),
	VariableChange({rushroom: 2}),
	detail(
		itm("2 Rushroom gliding down"),
		ingredient("rushroom", 55)),
	ShrineDoubleSword("Kema Kossasa"),
	split("-"),    
];