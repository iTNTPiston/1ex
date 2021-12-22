import { step, Korok, ability, Boss, split, Tower } from "../create";
import { cps, fury, gale } from "../types";
import { wb } from "../windbomb";

export const TabanthaTower = [
	step("Climb + ", wb(cps)("E>")),
	Korok("T36", "Flower Count"),
	step(wb(cps)("N. Turn")),
	Korok("T32", "Lift Rock", "On pillar"),
	step("SQ ", cps("<<N")),
	Korok("T27", "Offer Apple"),
	step(cps("N>")),
	Korok("T26", "Tree Stump"),
	step(wb(cps)("<N Turn")),
	Korok("T23", "Rock Circle"),
	step(wb(cps)("<<<S ordinal Turn")),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(wb(cps)("<S Turn")),
	Korok("T28", "Boulder Golf", "Run after bomb"),
	Korok("T29", "Lift Rock"),
	step("SQ to race start"),
	Korok("T30", "Race", "SQ High"),
	step(wb(cps)("<N")),
	Korok("T24", "Lift Rock", "Behind malice"),
	step(wb(cps)("N> Turn")),
	"Activate Monument",
	ability(step(wb(cps)("S + S"), " + ", gale()),{gale: 1}),
	Tower("Tabantha Tower"),
	split("-"),
];