import { Chest, detail, Snap, split, step } from "../create";
import { cps, emy, itm, } from "../types";
import { wb } from "../windbomb";

export const Hideout = [
	step(wb(cps)("S>> Turn to radiant shield")),
	Chest("Radiant Shield"),
	step(wb(cps)("NW D to hideout")),
	"",
	"Dupe:",
	detail(
		"1 Dupe until 5 multishot",
		"Need to use the quick overload (2 bow dupe) method for this. Unequipping Phantom (Equip gerudo) seems to be more consistent."),
	detail(
		"2 Dupe >=4 GEBS",
		"RGB, Duplex, (Any), (Any), (Any), GEB, GEB, GEB, GEB; Any = any multishot"),
	"3 Transfer Axe -> RGC",
	detail(
		"4 Drop Axe Dupe RGC",
		"Traveller, RGC, Hammer, Lynel, Torch, RGC, Knight"),
	"",
	detail(
		itm("15 Arrows"),
		"Use hammer as tha main weapon for anything that's not cutting trees (use lynel sword for that). Use RGC for Kohga"),
	Chest("Banana if needed", "5 for Korok"),
	Snap(emy("Kohga"), "SNAP Elite"),
	Chest("Thunderhelm"),
	split("-"),
];