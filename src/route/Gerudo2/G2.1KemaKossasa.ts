import { ability, detail, Discover, Korok, ShrineDLC, ShrineDoubleSword, split, step, VariableChange } from "../create";
import { cps, emy, gale, important, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const KemaKossasa = [
	ability(step(gale(), " SCW"), {gale: 1}),
	VariableChange({tail: 4}),
	detail(
		txt("Kill 4 ", emy("Lizalfos")),
		txt("Be careful not to get item text boxes. Tail ", v("tail"), "/45")),
	itm("14 Wood"),
	important("DO NOT LOOK BACK"),
	ShrineDLC("Kihiro Moh"),
	split("-"),

	step(itm("CHECK 12 Bananas"), " in hideout"),
	"Throw orb in hole",
	"SQ to shrine DEFUSE",
	Discover("Kihiro Moh Shrine"),
	ability(step(gale(), "+",wb(cps)("W midairs")), {gale: 1}),
	important("EQUIP SNOW BOOTS"),
	Korok("G16", "Light Chase", "FAR"),
	step(wb(cps)("W Turn")),
	Korok("G20", "Rock Circle"),
	step(wb(cps)(".N DEFUSE")),
	Korok("G15", "Lift Rock"),
	step("Drop, ", wb(cps)("<E Turn midair")),
	Korok("G11", "Race", wb(cps)("<E")),
	step(wb(cps)("NW")),
	VariableChange({tail: 2}),
	detail(
		txt("Kill 2 Black ", emy("Lizalfos")),
		txt("tail: ", v("tail"), "/45")),
	step(wb(cps)("<N + W midair")),
	Korok("G07", "Ice Block", "2 Fire Arrows"),
	ShrineDoubleSword("Kema Kossasa"),
	split("-"),    
];