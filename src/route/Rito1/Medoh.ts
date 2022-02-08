import { Chest, Cook, cps, emy, Equipment, important, itm, Npc, npc, setImportant, Shop, Shrines, SPLIT, STEP, wb } from "../../engine";

export const Medoh = [
	{ type: STEP, text: "BLSS to Rito" },
	...setImportant(
		Npc("Chief + Wife"),
		{
			text: "Revali Memory",
			icon: "medoh-memory",
			type: SPLIT,
		},
		"Drop down",
		itm("Cold Darner"),
		"Drop down to shop",
	),
	Shop("Buy Everything").extend({
		notes: "Gear Combo: Other: Drop 8 Shafts and sell all shafts."
	}),
	{ type: STEP, text: wb(cps)("<N TS") },
	Shrines.ShaWarvo,
	{ type: STEP, text: wb(cps)("N") },
	Equipment("Bow + Arrows"),
	Cook("Hearty + Endura", "Save 1 durian"),
	"Do minigame",
	Chest("Falcon Bow"),
	{
		icon: "medoh-enter",
		text: "Enter Medoh",
		comment: important("EAT COLD PROTECTION"),
		type: SPLIT
	},
	Chest("Ancient Core", "Skip if 5 cores"),
	{
		icon: "medoh-done",
		text: emy("Windblight 1"),
		comment: "EQUIP Falcon + BA",
		type: SPLIT,
		notes: "3 BA, Royal Wait, Glide 2 BA | Falcon 3BA, Royal 2BA Immediately"
	},
];

