import { step, Korok, detail, split, Warp, ShrineDLC, Snap, VariableChange, Chest, Equipment, MakeTOD } from "../create";
import { important, txt, lnk, itm, v, cps, emy } from "../types";
import { wb } from "../windbomb";

export const PlateauDLC = [
	step(Korok("P09", "Confetti", "Inside SOR")),
	"Activate OHO Trial",
	detail(
		"Unequip Cloths/Shield",
		txt("Tutorial: ", lnk("https://youtu.be/iS-QrQoTOGU"),". You don't have to skip it. Drop damaged/used gebs and non-gebs first")),
	txt("Equip ", itm("Trident")),
	"1 Drop Lynel + 4 GEBS",
	"2 Have FDB as last MO bow",
	important("Unequip OHO"),
	detail(
		step(important("HEAL")),
		"Ideally don't sort weapons here. This keeps Master Sword closer to the RGCs"),
	"Pick up 1 GEB",
	txt("Equip ", itm("Trident+Hylian")),
	"Overload",
	"Transfer Trident>RGC>Rod",
	"Transfer Shield",
	detail(
		"Dupe 4 RGCs",
		"Use Knight, Trident, Drillshaft, FDC. Torch, RGC, Korok Leaf, Master Sword, Blizzard, Thunderblade, RGC x 4. "),
	"Dupe GEBs KEEP Lizal",
	"Drop useless weapons",
	Warp("Keh Namut", txt("Check ", v("krk"), " Koroks")),
	split("-"),

	step(cps("SE")),
	Snap(emy("Silver Moblin"), "SNAP Elite"),
	txt("AA kill ", emy("Silver Moblin")),
	detail(
		"GEB rest",
		"Use Ice Arrows on moblins and use fire arrows on the ice type ones"),
	Chest("10 Ice Arrows"),
	"Surf to shrine",
	Snap(emy("Small Guardian"), "SNAP inside shrine if needed"),
	ShrineDLC("Etsu Korima"),
	split("-"),

	step(wb(cps)("N> Turn")),
	"Land on big stump",
	Snap(emy("Silver Bokoblin"), "SNAP Elite"),
	txt("AA kill ", emy("Silver Bokoblin")),
	"Ice arrow 2 far ones",
	"MS rest",
	VariableChange({honey: 1}),
	detail(
		itm("Honey"),
		txt("Knock down with blizzard rod. ", v("honey"), "/16")),
	ShrineDLC("Yowaka Ita"),
	split("-"),

	step("Run to old man place"),
	Equipment("10 Arrows"),
	VariableChange({honey: 1}),
	detail(
		itm("Honey"),
		txt("Knock down with blizzard rod. ", v("honey"), "/16")),
	step(wb(cps)("E> Turn")),
	"midair GEB ice arrow",
	"Blizzard Silver Lizalfos",
	Snap(emy("Silver Lizalfos"), "SNAP Elite"),
	VariableChange({tail: 3, honey: 2}),
	detail(
		"3 Lizalfos",
		txt("Tail: ", v("tail"), "/45. Honey: ", v("honey"), "/16")),
	itm("2 Honey"),
	ShrineDLC("Rohta Chigah"),
	split("-"),

	step(cps("SW")),
	detail(
		Snap(emy("Stalhorse"), "SNAP Quest"),
		"Make sure to get the horse not the bokoblin. Blue bokoblin is 2 words while stalhorse is one. Stalhorse ends with b in Russian."),
	MakeTOD("5am", "Trigger Bloodmoon"),
	ShrineDLC("Ruvo Korbah"),
	split("-"),
];