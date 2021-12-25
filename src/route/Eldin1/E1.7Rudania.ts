import { ability, Boss, Chest, detail, Equipment, Icon, Korok, Shop, Shrine, Snap, split, step } from "../create";
import { cps, emy, gale, important, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const Rudania = [
	detail(
		step(wb(cps)("NW to rare ore")),
		"Smack for amber"),
	important("EQUIP STEALTH 3"),
	step(wb(cps)("NW to southern mine")),
	detail(
		txt("Ores for ", itm("Amber")),
		"Check 6-8 ambers. You can get the rest during yunobo escort"),
	npc("Lizard Quest"),
	detail(
		txt("Talk to ", npc("Greyson")),
		"Make night if you need"),
	ability(step(wb(cps)("<N turn + N>"), " + ", gale()), {gale: 1}),
	Korok("E15", "Confetti", "Inside agreeGe"),
	"Drop down",
	Shop("Armor Shop", "Pants, Equip"),
	Shop("General Shop", "1 Goron Spice"),
	txt("Talk to ", npc("Bludo")),
	step(wb(cps)("N> to shrine")),
	Shrine("Shae Mo'sah"),
	split("-"),

	step(wb(cps)("Yunobo Skip")),
	Chest("10 Ice Arrows"),
	step(wb(cps)("W> Turn")),
	Boss("Igneo Talus", txt("Ice + RGC spin get parts")),

	ability(step(gale(), " + ", wb(cps)("E super")), {gale: 1}),
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
	detail(
		Equipment("Drillshaft", "DO NOT LOSE"),
		"Hammer, Torch, RGC, Knight, Trident, Drillshaft"),
	step(cps("NE")),
	Shrine("Daqa Koh"),
	split("-"),

	wb(cps)("E. to Yunobo"),
	itm("Amber/Flint on the way"),
	Icon("rudania-enter", "Enter Rudania"),
	split("-"),

	detail(
		ability(gale(), {gale:1}),
		"For last terminal"),
	detail(
		Snap(emy("Fireblight"), "SNAP Elite"),
		"SNAP first, then stasis, then equip attack up"),
	Icon("rudania-done", "Fireblight 1", "8 Headshots"),
	split("{2 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),
];