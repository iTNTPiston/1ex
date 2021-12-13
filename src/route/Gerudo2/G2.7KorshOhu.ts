import { step, Korok, split, Tower, Equipment, Boss, ShrineBlessing, ability } from "../create";
import { cps, emy, fury, important, itm, txt } from "../types";
import { wb } from "../windbomb";

export const KorshOhu = [
	important("EQUIP STEALTH"),
	step("Run down bridge"),
	Korok("W33", "Balloon", "Under bridge"),
	step(wb(cps)("W midair")),
	Korok("W32", "Block Puzzle"),
	"Run to ledge",
	Korok("W31", "Lift Rock"),
	step("Run + ", wb(cps)("N. to tower")),
	Tower("Wasteland Tower", "36.67%"),
	split("-"),
	step(wb(cps)("<E Turn down")),
	"Start race",
	wb(cps)("<S no turn"),
	Korok("W24", "Lift Rock", "On platform"),
	Korok("W23", "Race", "Drop down finish race"),
	step(wb(cps)("<N Slight Turn")),
	Equipment("Fire Rod"),
	"Cut Tree",
	"SQ to tree DEFUSE",
	Korok("W11", "Lift Rock"),
	step(wb(cps)("SW")),
	Korok("W12", "Acorn", "Bomb chest midair"),
	txt("Freeze ", emy("Electric Lizalfos")),
	itm("Electric Darner"),
	Korok("W16", "Boulder Golf", "2 MS Hits"),
	step(wb(cps)("SE super + S midair DEFUSE")),
	Korok("W34", "Rock Circle"),
	step(wb(cps)("S> Turn")),
	Korok("W39", "Block Puzzle"),
	step(wb(cps)("S> Turn")),
	ability(Boss("Luminous Talus", fury()), {fury: 3}),
	itm("Luminous/Opal"),
	step(cps("NW")),
	Korok("W38", "Lift Rock", "On pillar"),
	step(cps("NW")),
	Korok("W30", "Block Puzzle"),
	step(wb(cps)("S> Turn")),
	Korok("W35", "Balloon", "Between arms. Shoot midair"),
	"Do Puzzle",
	ShrineBlessing("Korsh O'hu"),
	split("-"),
];