import { Chest, detail, indent, Snap, split, step } from "../create";
import { emy,  itm,   } from "../types";

export const Hideout = [
	step("WB to hideout"),
	detail(
		"Dupe:",
		"Bows: Keep Duplex and RGB. Weapons: Keep 1 hammer, lynel sword and torch. 5 RGCs. Make sure RGB has 2 shots for Rudania and Sheem Dagoze"),
	indent("Transfer Axe -> RGC"),
	itm("15 Arrows"),
	Snap(emy("Kohga"), "SNAP Elite"),
	Chest("Thunderhelm"),
	split("-"),
];