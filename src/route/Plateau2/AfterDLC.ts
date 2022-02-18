import { Boss, Chest, ChestSpecial, cps, Discover, fury, gale, Koroks, Memories, Npc, Shrines, STEP, txt, wb, WindbombStepCps } from "../../engine";

export const AfterDLC = [
	WindbombStepCps("N + N"),
	Koroks.P11,
	"SQ down",
	Koroks.P10,
	WindbombStepCps("NW"),
	Boss("Stone Talus", fury()).extend({
		ability: { fury: 1 },
		notes: "Get parts until 10 amber",
	}),
	"SQ to flower",
	Koroks.P04,
	WindbombStepCps("S"),
	Koroks.P06,
	"SQ to big tree",
	Koroks.P05,
	WindbombStepCps("NE"),
	Koroks.P02,
	"Run",
	Koroks.P01,
	WindbombStepCps("NW"),
	Koroks.C81,
	WindbombStepCps("E> Turn"),
	Koroks.C82,
	WindbombStepCps("N> Turn"),
	Memories.LakeKolomo,

	WindbombStepCps("S"),
	Koroks.C83,
	WindbombStepCps("E. SQ"),
	Discover("Gatepost Town Ruins"),
	WindbombStepCps("N>"),
	Koroks.C76,
	ChestSpecial("Majora's Mask"),
	WindbombStepCps("N> SQ"),
	Koroks.C75,
	{ type: STEP, text: "SQ to talus" },
	Boss("Luminous Talus", fury()).extend({
		ability: { fury: 2 }
	}),
	WindbombStepCps("NW"),
	Koroks.C69,
	WindbombStepCps("N midair"),
	Koroks.C63,
	{ type: STEP, text: "SQ to fountain" },
	Koroks.C62,
	ChestSpecial("Tingle Hood"),
	WindbombStepCps(".W Turn"),
	Koroks.C61,
	{ type: STEP, text: "SQ to block puzzle" },
	Koroks.C60,
	WindbombStepCps("W> Turn"),
	Koroks.C58,
	WindbombStepCps("SW"),
	Koroks.C59,
	WindbombStepCps("<N"),
	Koroks.R74,
	{
		type:STEP,
		text: txt(gale(), " + ", wb(cps)("<N")),
		ability: { gale: 1 }
	},
	Memories.SanidinPark,
	{ type: STEP, text: "SQ to white horse" },
	"Ride to korok",
	Koroks.R79,
	"Ride to stable",
	Npc("Register Horse"),
	Npc("Gourmet Meat Guy", "Twice"),
	Npc("Horse Guy"),
	Npc("Fan Girl"),
	Koroks.C78,
	WindbombStepCps("<N"),
	Koroks.C72,
	WindbombStepCps("<<W"),
	Shrines.RotaOoh,

	WindbombStepCps("<<W"),
	Koroks.C85,
	WindbombStepCps("SW"),
	Koroks.R80,
	WindbombStepCps("<E SQ"),
	Koroks.C86,
	WindbombStepCps("S> Turn"),
	Koroks.G29,
	WindbombStepCps(".E Turn"),
	Koroks.C87,
	WindbombStepCps("S>"),
	Boss("Blue Hinox", "5 Spin SLAM"),
	Koroks.C88,
	WindbombStepCps("<S Turn"),
	Discover("Gerudo Canyon Pass"),
	WindbombStepCps("NE"),
	Koroks.C89,
	WindbombStepCps("NW"),
	Chest("Ancient Core", "Skip if 2 cores"),
	Shrines.DahKaso.extend({
		splitPrefix: "{Plateau 2}",
	})
    
];