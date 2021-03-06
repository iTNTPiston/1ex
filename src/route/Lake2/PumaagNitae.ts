import { WindbombStepCps, Koroks, MakeNight, Discover, Materials, Boss, fury, important, ChestSpecial, emy, Towers, Shrines } from "../../engine";

export const PumaagNitae = [
	WindbombStepCps("SQ to bridge"),
	Koroks.D27,
	WindbombStepCps("SQ"),
	Koroks.D34,
	Koroks.D33,
	WindbombStepCps("W DEFUSE"),
	Koroks.D32,
	WindbombStepCps("S"),
	Koroks.D31,
	WindbombStepCps("S"),
	Koroks.D44,
	MakeNight("For XB"),
	WindbombStepCps("<W Turn"),
	Koroks.P12,
	Koroks.P13,
	WindbombStepCps("N> Turn"),
	Discover("Outpost Ruins"),
	Materials.Rushroom(7),
	WindbombStepCps("S"),
	Boss("Luminous Talus", fury()).extend({
		ability: { fury: 2 }
	}),
	WindbombStepCps("SQ to cave"),
	Koroks.D43,
	WindbombStepCps("<S + E>"),
	Koroks.L03,
	WindbombStepCps("<S Turn"),
	Koroks.L10,
	WindbombStepCps("GALE + W").extend({
		ability: { gale: 1 }
	}),
	Koroks.D54,
	Koroks.L09,
	"Drop down",
	Koroks.L15,
	Koroks.L14,
	WindbombStepCps("S"),
	Koroks.L26,
	{
		important: true,
		text: important("LOOK SKY S")
	},
	Koroks.L27,
	Koroks.L30,
	Koroks.L31,
	WindbombStepCps("E Turn"),
	Koroks.L32,
	WindbombStepCps("SQ to chest"),
	ChestSpecial("Xenoblade"),
	WindbombStepCps("SQ to rock"),
	Koroks.L39,
	WindbombStepCps("E>"),
	Koroks.L40,
	WindbombStepCps("<W"),
	Koroks.L42,
	Koroks.L43,
	WindbombStepCps("GALE + <W").extend({
		ability: { gale: 1 }
	}),
	Koroks.L51,
	WindbombStepCps("W"),
	emy("2 Lizalfos"),
	Materials.Rushroom(8),
	WindbombStepCps("W + GALE").extend({
		ability: { gale: 1 }
	}),
	Towers.Lake(),

	"Drop down SW",
	Materials.Tail(2, "Silver + Blue"),
	WindbombStepCps("SW"),
	Koroks.L48,
	"Cryo down",
	ChestSpecial("WW Shirt"),
	WindbombStepCps("S>"),
	Koroks.L49,
	WindbombStepCps("SQ to rocks"),
	Koroks.L50,
	WindbombStepCps("<S Turn"),
	Koroks.L60,
	WindbombStepCps("<E Turn"),
	Koroks.L52,
	WindbombStepCps("<E"),
	Shrines.PumaagNitae
];