import { cps, Ingredient, itm, MakeMorning, Materials, Npc, npc, Section, Shop, Shrines, STEP, Warp, wb } from "../../engine";

export const Kakariko1 = [
	Section("KAKARIKO 1"),
	Warp("Keh Namut"),
	"BLSS to Impa",
	MakeMorning("For beetle"),
	Ingredient("Beetle", Materials.Beetle).extend({
		variableChange: { Beetle: 1 }
	}),
	Shop("Arrow Shop", "All Arrows"),
	Npc("Fire Lady Twice"),
	Shop("Material Shop", "Carrot (Gut)"),
	{ type: STEP, text: wb(cps)(".N to shrine") },
	Shrines.TalohNaeg,

];