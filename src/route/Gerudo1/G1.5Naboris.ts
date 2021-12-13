import { step, Warp, split, Shrine, Icon, indent, detail, Snap, ability } from "../create";
import { emy, gale, important, lcn, npc, rne, txt } from "../types";

export const Naboris = [
	step(important("EQUIP GERUDO")),
	Warp("Daqo Chisay"),
	split("-"),
	important("EQUIP GERUDO"),
	step(Shrine("Daqo Chisay")),
	split("-"),
	step("WB to ", npc("Riju")),
	Icon("naboris-memory", "Urbosa Memory"),
	split("-"),
	step("WB to ", npc("Riju"), " at watchtower"),
	txt("Ride sandseal to ",lcn("Misae Suma")),
	txt("Talk to ",npc("Quest lady")),
	step("BF WB to Naboris"),
	indent("aim a bit left of dot"),
	Icon("naboris-enter", "Enter Naboris"),
	split("-"),

	important("EQUIP ", rne("ROUND BOMB")),
	detail(
		ability(txt("Naboris: ", gale()), {gale: 2}),
		"Same as AD naboris"),
	detail(
		Snap(emy("Small Guardian"), important("SNAP for quest")),
		"Snap the last one before Thunderblight so you already have camera out"),
	Snap(emy("Thunderblight"), "SNAP Elite"),
	Icon("naboris-done", "Thunderblight 1", "Stasis+ 8 Headshots"),
	split("-"),
];