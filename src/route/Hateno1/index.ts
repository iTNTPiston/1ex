import { Cook, cps, Equipment, important, Ingredient, Item, itm, Koroks, Materials, Npc, npc, rne, Section, setImportant, Shrines, SPLIT, STEP, Towers, txt, wb } from "../../engine";

export const Hateno1 = [
	Section("HATENO 1"),
	{ type: STEP, text: wb(cps)("N") },
	Ingredient("3 Silent Princess", Materials.SilentPrincess, "2 for stealth potion").extend({
		variableChange: { SilentPrincess: 1 },
	}),
	Item("4 Grass", "3 for potion + 1 for quest"),
	{ type: STEP, text: "BLSS to farmer" },
	Npc("Farmer"),
	Item("3-4 Frogs"),
	Npc("Statue", "3 Hearts"),
	{ type: STEP, text: wb(cps)("N>") },
	Koroks.N42,
	{
		text: "Smuggle flame to lab",
		notes: "Can toss away torch"
	},{
		icon: "camera-plus",
		text: "Camera",
		comment: "A until all upgraded",
		type: SPLIT
	},
	{ type: STEP, text: wb(cps)("<E SQ") },
	Koroks.N48,
	{ type: STEP, text: wb(cps)("<N Turn") },
	Koroks.N43,
	{ type: STEP, text: wb(cps)("S>") },
	Npc("Sheep Lady"),
	{ type: STEP, text: wb(cps)("<W Turn") },
	Npc("Bolson"),
	Equipment("2 Hammers"),//TODO: flameblade, 2 axe, 2 hammers
	Cook("Speed | Cold | Stealth").extend({
		notes: "Speed = 3 Frogs+Carrot+Core/Gut, Cold = Darner+Screw"
	}),
	{ type: STEP, text: "SQ to shrine" },
	important("EQUIP ", rne("CAMERA")),
	Shrines.MyahmAgana.extend({
		notes: "Equip camera for auto save. Remember to switch to bombs"
	}),
	...setImportant(
		{ type: STEP, text: "SQ to horned statue"},
		{ 
			text: "SELL 4 (0H0S | 4E), SAVE",
			notes: "All first options"
		},
		"Load in shrine + Glitch",
		{ 
			text: "SELL 4 (0H0S | 8E), SAVE",
			notes: "All first options"
		},
		"Load in shrine + Glitch DUPE",
		{ 
			text: "SELL 2 (2H0S | 10E), SAVE",
			notes: "All first options"
		},
		{ 
			text: "BUY 10H (12H0S | 0E)",
			notes: "121+"
		},
		"WB to shrine + Glitch",
		{ 
			text: "BUY 5H5S (17H5S | 0E)",
			notes: "122+221+"
		},
		"WB to shrine + Glitch",
		{ 
			text: "BUY 5H5S (17H5S | 0E)",
			notes: "122+21+"
		},
		important("CHECK 25 Hearts"),
		{
			icon: "link",
			text: "Essence Duped",
			type: SPLIT,
			notes: "split on last heart"
		},
	),

	{ type: STEP, text: wb(cps)("<S") },
	Npc("Bolson Twice").extend({
		notes: "If Bolson stands up because of phantom armor, you have to wait for him to sit down"
	}),
	Npc("Hudson"),
	npc("Upgrade House"),
	{
		icon: "house-plus",
		text: "House Upgraded",
		type: SPLIT,
		notes: "split on last fade out"
	},
    
	"Run up hill",
	Koroks.N59,
	important("RELOAD AUTOSAVE"),
	{ type: STEP, text: wb(cps)("W Turn") },
	Koroks.N58,
	{ type: STEP, text: wb(cps)("SW") },
	Ingredient("Bomb Hearty Bass", Materials.HeartyBass).extend({
		variableChange: { HeartyBass: 5 }
	}),
	{ type: STEP, text: wb(cps)("W> Turn") },
	Koroks.N50,
	Koroks.N49,
	{ type: STEP, text: wb(cps)("N + N") },
	Towers.Hateno(),
    
];