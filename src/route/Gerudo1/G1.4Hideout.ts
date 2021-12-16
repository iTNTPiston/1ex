import { Chest, detail, indent, Snap, split, step } from "../create";
import { emy,  itm,   } from "../types";

export const Hideout = [
	step("WB to hideout"),
	detail(
		"Dupe:",
		"3 RGCs and all GEBs except duplex and lynel"),
	indent("Transfer Axe -> RGC"),
	itm("15 Arrows"),
	Snap(emy("Kohga"), "SNAP Elite"),
	Chest("Thunderhelm"),
	split("-"),
];