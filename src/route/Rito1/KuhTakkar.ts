import { Chest, cps, important, Item, itm, Koroks, Shrines, STEP, txt, wb } from "../../engine";

export const KuhTakkar = [
	{ type: STEP, text: txt("BLSS + ", cps("S")) },
	Koroks.G19,
	important("EAT LONG COLD PROTECTION"),
	{ type: STEP, text: wb(cps)("NW + W") },
	Koroks.G13,
	{ type: STEP, text: wb(cps)("N + W") },
	Koroks.G10,
	{ type: STEP, text: wb(cps)("W + S HIGH") },
	Koroks.G12,
	{ type: STEP, text: wb(cps)("<S Turn") },
	Item("2 Truffles"),
	"Start melting ice",
	Chest("5 Fire Arrows"),
	Item("Luminous Stones", "While melting ice"),
	Shrines.KuhTakkar,
];