import { step, Korok, detail, indent, split, Warp, ShrineDLC, Snap, VariableChange, Chest, Equipment } from "../create";
import { important, txt, lnk, itm, v, cps, emy } from "../types";
import { wb } from "../windbomb";

export const PlateauDLC = [
	step(Korok("P09", "Confetti", "Inside SOR")),
	"Activate OHO Trial",
	important("SAVE"),
	detail(
		"Unequip Cloths/Shield",
		txt("Tutorial: ", lnk("https://youtu.be/iS-QrQoTOGU"),". You don't have to skip it. Drop damaged/used gebs and non-gebs first")),
	txt("Equip ", itm("Trident")),
	"Throw SQ bomb",
	"Equip Normal Arrow",
	"Pull GEB out, switch shock",
	"Drop 5 GEBs",
	"Put away 6th GEB",
	txt("Switch to ", itm("Thunderblade")),
	indent("Should switch"),
	"Wait for blade to charge",
	txt("Switch to ", itm("Trident")),
	indent("Should not switch"),
	important("Unequip Trident"),
	"Pick up OHO",
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
		"Dupe 5 RGCs",
		"Use Knight, Trident, Drillshaft, FDC. Torch, RGC, Korok Leaf, Master Sword, Blizzard, Thunderblade, RGC x 4. "),
	"Dupe GEBs KEEP RGB",
	important("SAVE"),
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
		"RGC spin him",
		txt("Tail: ", v("tail"), "/45. Honey: ", v("honey"), "/16")),
	itm("2 Honey"),
	ShrineDLC("Rohta Chigah"),
	split("-"),

	step(cps("SW")),
	detail(
		Snap(emy("Stalhorse"), "SNAP Quest"),
		"Make sure to get the horse not the bokoblin. Blue bokoblin is 2 words while stalhorse is one. Stalhorse ends with b in Russian."),
	ShrineDLC("Ruvo Korbah"),
	split("-"),
];