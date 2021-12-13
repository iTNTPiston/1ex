import { ability, Boss, Chest, detail, Equipment, Icon, Korok, Shop, Shrine, Snap, split, step, VariableChange } from "../create";
import { cps, emy, fury, gale, important, itm, npc, txt } from "../types";
import { wb } from "../windbomb";

export const Rudania = [
	detail(
		step(wb(cps)("NW to southern mine")),
		"Switch to Royal Guard Bow and UNEQUIP BOMB ARROW. Always make sure to check when going to Eldin."),
	important("EQUIP STEALTH 3"),
	VariableChange({amber: 3}),
	detail(
		txt("Ores for ", itm("Amber")),
		"Need around 3-5 ambers"),
	npc("Lizard Quest"),
	detail(
		txt("Talk to ", npc("Greyson")),
		"Make night if you need"),//TODO check TOD here
	step(wb(cps)("<N turn + N> midairs")),
	Korok("E15", "Confetti", "Inside agreeGe"),
	"Drop down",
	Shop("Armor Shop", "Pants, Equip"),
	Shop("General Shop", "1 Goron Spice"),
	txt("Talk to ", npc("Bludo")),
	step(wb(cps)("N> to shrine")),
	Shrine("Shae Mo'sah"),
	split("-"),

	step(wb(cps)("NW super")),
	ability(Boss("Igneo Talus", txt(fury(), " get parts")), {fury: 3}),

	step(wb(cps)("E super rescue Yunobo")),
	Chest("10 Ice Arrows"),
	ability(gale(), {gale: 1}),
	Korok("E08", "Lift Rock", "Top of northern mine"),
	step(wb(cps)("<S TS back")),
	txt("Talk to ", npc("Bludo")),
	Icon("rudania-memory", "Daruk Memory"),
	split("-"),

	step(cps("E")),
	Korok("E16", "Confetti", "Top of skeleton"),
	step("SQ (SE) to race start"),
	Korok("E17", "Race", "Glide over"),
	step(wb(cps)("S + E to Drillshaft")),
	Equipment("Drillshaft", "DO NOT LOSE"),
	step(cps("NE")),
	Shrine("Daqa Koh"),
	split("-"),

	detail(
		wb(cps)("E. to Yunobo"),
		"Keep 3AA for ganon"),
	itm("Amber/Flint on the way"),
	ability(txt(fury(), " last 3 drones"),{fury: 2}),
	Icon("rudania-enter", "Enter Rudania"),
	split("-"),

	ability(gale(), {gale:1}),
	detail(
		Snap(emy("Fireblight"), "SNAP Elite"),
		"SNAP first, then stasis, then equip attack up"),
	Icon("rudania-done", "Fireblight 1", "8 Headshots"),
	split("-"),
];