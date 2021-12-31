import { step, Warp, split, Icon, indent, detail, Snap, ability, Korok, Shrine } from "../create";
import { cps, emy, gale, important, lcn, npc, rne, txt } from "../types";
import { wb } from "../windbomb";

export const Naboris = [
	step(wb(cps)("E + W + <W")),
	detail(
		Korok("W02", "Offer Banana", "Pick up 4"),
		"Pick up banana so your inventory is on banana"),
	"Glide to next one",
	Korok("G25", "Offer Banana", "Pick up 3"),
	step("glide/midair to next"),
	Korok("W04", "Offer Banana", "Pick up all"),
	"Run down",
	Korok("W05", "Offer Banana", "Pick up 1"),
	"SQ behind",
	Korok("W03", "Offer Banana", "No pick up, 1 left"),
	step(wb(cps)("S to pillar")),
	Korok("W06", "Flower Chase"),
	step(wb(cps)("E> Turn")),
	Korok("G33", "Rock Circle"),
	step(cps("SE")),
	important("EQUIP GERUDO"),
	Korok("W29", "Race", "SQ DEFUSE"),
	step(wb(cps)("S> Turn to Riju")),
	important("EQUIP GERUDO"),
	npc("Talk to Riju"),
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