import { ability, Boss, detail, Discover, Korok, Snap, split, step, Tower, VariableChange } from "../create";
import { cps, emy, fury, gale, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const CentralTower = [
	VariableChange({tail: 4}),
	step("WB to Camp"),
	detail(
		emy("4 Lizalfos"),
		txt(v("tail"), "/45")),

	step(wb(cps)("S")),
	Korok("G22", "Rock Circle"),
	step(wb(cps)("N. Turn")),
	Korok("G17","Ice Block", "2 FA"),
	ability(step(gale(), " + ", wb(cps)("E")), {gale: 1}),
	detail(
		ability(Boss("Frost Talus", fury()), {fury: 3}),
		"Opals if needed"),
	step(wb(cps)("NE")),
	Korok("G18", "Ice Block", "Far one"),
	step(wb(cps)("SE")),
	Korok("G23", "Lift Rock", "Peak far"),
	step(wb(cps)("SW")),
	Korok("G27", "Rock Circle", "Platform on cliff"),
	step(wb(cps)("E> Turn")),
	Korok("G28", "Block Puzzle"),
	step(wb(cps)("<E Turn")),
	Korok("G24", "Rock Circle"),
	step(wb(cps)("S> Turn to top camp")),
	emy("2 Bokos"),
	npc("Friend 1"),
	txt("Drop down 1 ", emy("boko")),
	npc("Friend 2"),
	wb(cps)("E Turn"),
	emy("2 Bokos"),
	npc("Friend 3"),
	wb(cps)(".S Turn"),
	emy("2 Bokos"),
	npc("Friend 4"),
	step(wb(cps)("E> Turn + E midairs")),
	Korok("P15", "Rock Circle"),
	step("SQ ", cps("NW")),
	Korok("P14", "Block Puzzle"),
	ability(step(gale(), " + ", wb(cps)("N")), {gale: 1}),
	Korok("P07", "Ice Block"),
	step("SQ to bridge"),
	Korok("P08", "Confetti", "Cryo log"),
	step(wb(cps)("N>")),
	Korok("P03", "Block Puzzle"),
	important("EQUIP STEALTH if night"),
	step(wb(cps)("N")),
	Korok("C80", "Acorn in Log", "Shoot midair"),
	step(wb(cps)("E midair")),
	Korok("C79", "Lift Rock"),
	step("SQ"),
	Korok("C74", "Lift Rock", "Top of Coliseum"),
	Snap(emy("Silver Lynel"), "SNAP Elite"),
	"Drop down",
	Korok("C73", "Race", "SQ High"),
	detail(
		Korok("C68", "Acorn", "Hanging on bridge"),
		"Aim at black dot on bridge. Acorn is unloaded during rain so you need to WB to bridge first"),
	step("SQ to bridge"),
	Discover("Aquame Bridge"),
	Korok("C67", "Lift Rock", "On ledge (Hard to see)"),
	step(wb(cps)(".W")),
	Korok("C66", "Rock Circle"),
	step(wb(cps)("N Turn")),
	Korok("C52", "Lift Rock", "In well in village"),
	step(wb(cps)(".N Turn")),
	Korok("C37", "Block Puzzle"),
	step(wb(cps)("S>>")),
	Korok("R58", "Lift Rock (Tree)"),
	step(wb(cps)("E + E> midair")),
	Korok("C53", "Offer Apple"),
	step("SQ toward lake"),
	Discover("Ancient Tree Stump"),
	Korok("C47", "Lily Pads", "Drown"),
	step(wb(cps)("<E Turn")),
	Tower("Central Tower", "76.93%"),
	split("-"),

];