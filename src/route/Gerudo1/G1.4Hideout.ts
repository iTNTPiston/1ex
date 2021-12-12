import { Chest, detail, indent, Snap, split, step, VariableChange } from "../create";
import { emy, important, itm, txt, v } from "../types";

export const Hideout = [
	step(important("EQUIP PHANTOM")),
	"WB to camp",
	VariableChange({tail: 4}),
	detail(
		txt("Kill 4 ",emy("Lizalfos")),
		txt("Ice arrow headshot with RGB, then spin slam kill all with Royal Claymore. Tail: ",v("tail"),"/45")),
	itm("14 wood"),

	step("WB to hideout"),
	detail(
		"Dupe:",
		"Bows: Keep Duplex and RGB. Weapons: Keep 2 hammers and torch. 5 RGCs"),
	indent("Transfer GEB -> RGB"),
	indent("Transfer Axe -> RGC"),
	itm("15 Arrows"),
	Snap(emy("Kohga"), "SNAP Elite"),
	Chest("Thunderhelm"),
	split("-"),
];