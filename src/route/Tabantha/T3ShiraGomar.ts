import { step, ability, ShrineDoubleSword, Korok, split, Memory, Boss, MakeTOD, ShrineDLC, detail, VariableChange } from "../create";
import { cps, npc, txt, gale, fury, itm, v } from "../types";
import { wb } from "../windbomb";

export const ShiraGomar = [
	step(wb(cps)("N Low")),
	"Activate Monument",
	step(wb(cps)("<S TS")),
	VariableChange({silentPrincess: 2}),
	detail(
		itm("2 Silent Princess"),
		txt(v("silentPrincess"), "/19")),
	npc("Fairy Fountain"),
	ability(txt(gale(), " + ",cps("SE")), {gale: 1}),
	Korok("T33", "Balloon", "Use bomb"),
	step(wb(cps)("S> Turn")),
	ShrineDoubleSword("Tena Ko'sah"),
	split("-"),

	step(Memory("Ancient Columns")),
	split("-"),
	
	"Run",
	Korok("T35", "Lily Pads", "No Drown"),
	step(wb(cps)("W")),
	Korok("T37", "Race", "SQ DEFUSE"),
	step(wb(cps)("N> Turn")),
	Korok("T31", "Offer Apple"),
	step(wb(cps)("N>")),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(wb(cps)("<E")),
	Korok("T25", "Lift Rock", "On ledge"),
	step(wb(cps)("N + N + NE")),
	Korok("H72", "Confetti", "Top of windmill"),
	step(wb(cps)("W>")),
	Korok("T18", "Confetti", "Top of tree"),
	MakeTOD("5am", "Make Morning", "For Dinraal (Horn)"),
	step(wb(cps)("E Turn to Dinraal")),
	"Shoot Glowing Horn",
	"Pick up horn",
	Korok("R01", "Block Puzzle"),
	step(cps("NE")),
	Korok("H68", "Lift Rock"),
	step(wb(cps)("S + W")),
	Korok("H71", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("S> Turn")),
	ShrineDLC("Shira Gomar"),
	split("-"),
];