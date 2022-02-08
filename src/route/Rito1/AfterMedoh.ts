import { Chest, cps, Equipment, important, Item, itm, Koroks, Npc, npc, setImportant, Shop, Shrines, STEP, wb } from "../../engine";

export const AfterMedoh = [
	Item("Cold Darner", "On deck"),
	Npc("BN Shrine Lady"),
	Npc("Apple Lady"),
	Npc("Chief"),
	Chest("Great Eagle Bow", "Don't use until duped"),
	Shrines.AkhVaquot.extend({
		notes: "Back up darner on bridge"
	}),
	{ type: STEP, text: wb(cps)("W Turn") },
	Npc("Voo Lota Girl"),
	{ type: STEP, text: wb(cps)("E TS") },
	Item("10 Berries"),
	Shop("Beedle Twice", "Arrows + Darner"),
	important("ANCIENT ARROW"),
	"Farm Wood",
	Equipment("2 Axe"),//torch, flameblade, 3 axe (1 breaks)
	important("SAVE"),
	Item("Balloon + Voltfin", "From RNG Octoroks"),
	"RELOAD Farm Wood",
	{ type: STEP, text: wb(cps)("<S") },
	Koroks.T19
];