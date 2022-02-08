import { ChestSpecial, cps, Koroks, STEP, Warp, wb } from "../../engine";

export const Hestu = [
	Warp("Taloh Naeg"),
	{ type: STEP, text: wb(cps)("<<S Super") },
	"2 BA Bullet time kill camp",
	ChestSpecial("Maracas"),
	{ type: STEP, text: wb(cps)(".W") },
	{
		text: "Hestu",
		comment: "2 Bows",
		icon: "hestu",
		korokChange: -3
	},
	{ type: STEP, text: wb(cps)("<W Turn") },
	Koroks.D20,
	{ type: STEP, text: wb(cps)("NW") },
	Koroks.D19,
	{ type: STEP, text: wb(cps)("NW") },
	Koroks.D18
];
