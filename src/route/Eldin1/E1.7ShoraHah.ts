import { Chest, detail, Korok, Shop, Shrine, split, step, VariableChange } from "../create";
import { cps, gale, important, itm, npc, txt } from "../types";
import { wb } from "../windbomb";

export const ShoraHah = [
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
	step(wb(cps)("<N turn + NE midair to GC")),
	Shop("Armor Shop", "Pants, Equip"),
	Shop("General Shop", "1 Goron Spice"),
	txt("Talk to ", npc("Bludo")),
	step(wb(cps)("N> to shrine")),
	Shrine("Shae Mo'sah"),
	split(),

	step(wb(cps)("<N turn rescue Yunobo")),
	Chest("10 Ice Arrows"),
	gale("2"),
	Korok("E08", "Lift Rock", "Top of northern mine"),
	step("SQ to shrine"),
	Shrine("Shora Hah"),
	split(),
];