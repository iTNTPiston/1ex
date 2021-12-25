import { Chest, detail, Snap, split, step } from "../create";
import { emy,  itm, v,   } from "../types";

export const Hideout = [
	step("WB to hideout"),
	"",
	"Dupe:",
	detail(
		"1 Dupe until 5 multishot",
		"Need to use the quick overload (2 bow dupe) method for this"),
	detail(
		"2 Dupe >=3 GEBS",
		"RGB, Duplex, (Any), (Any), (Any), GEB, GEB, GEB; Any = any multishot"),
	"3 Transfer Axe -> RGC",
	detail(
		"4 Drop Axe Dupe RGC",
		"RGC, Hammer, Lynel, Torch, RGC, Knight"),
	"",
	detail(
		itm("15 Arrows"),
		"Use hammer as tha main weapon for anything that's not cutting trees (use lynel sword for that). Use RGC for Kohga"),
	Snap(emy("Kohga"), "SNAP Elite"),
	Chest("Thunderhelm"),
	split("{1 | 0", v("srn"), " SRN | 0", v("krk"), " KRK}"),
];