import { step, Korok, detail, Warp, split, Icon, Equipment, Shrine, Snap } from "../create";
import { cps, emy, fury, gale, important, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const TarryTown2 = [
	step(cps("S")),
	Korok("A26", "Block Puzzle"),
	step(wb(cps)("W> Turn")),
	Korok("A20", "Block Puzzle"),
	step(wb(cps)("E> Turn")),
	Korok("A27", "Light Chase"),
	step(wb(cps)("S Slight Turn + midairs")),
	txt("Talk to ", npc("Hudson"), " twice"),
	"20 Wood",
	detail(
		"Place Travel Medallion",
		"Place it facing Link to Hudson. Don't place if missed BM"),
	Warp("Shae Mo'sah", txt("Check ", v("krk"), " Koroks")),
	split(),
];

export const Rudania = [
	important("EQUIP ELDIN STUFF"),
	"SQ aim at quest dot",
	txt("Talk to ", npc("Bludo")),
	Icon("rudania-memory", "Daruk Memory"),
	split(),

	step(cps("E")),
	Korok("E16", "Confetti", "Top of skeleton"),
	step("SQ (SE) to race start"),
	Korok("E17", "Race", "Glide over"),
	step(wb(cps)("S + E to Drillshaft")),
	Equipment("Drillshaft", "DO NOT LOSE"),
	step(cps("NE")),
	Shrine("Daqa Koh"),
	split(),

	detail(
		wb(cps)("E. to Yunobo"),
		"Use ancient arrow to skip yunobo cutscene if you have extra. Keep 10 for ganon"),
	itm("Amber/Flint on the way"),
	txt(fury("1-2"), " last 3 drones"),
	Icon("rudania-enter", "Enter Rudania"),
	split(),

	gale("1"),
	detail(
		Snap(emy("Fireblight"), "SNAP Elite"),
		"SNAP first, then stasis, then equip attack up"),
	Icon("rudania-done", "Fireblight 1", "8 Headshots"),
	split(),
];