import { detail, Discover, Korok, Shrine, ShrineDLC, split, step, VariableChange } from "../create";
import { cps, emy, gale, important, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const KemaKossasa = [
	important("EQUIP SNOW BOOTS"),
	step(gale("1"), " SCW"),
	ShrineDLC("Kihiro Moh"),
	split(),

	step(itm("11 Bananas"), " in hideout"),
	"Throw orb in hole",
	"SQ to shrine DEFUSE",
	Discover("Kihiro Moh Shrine"),
	step(gale("2"), "+",wb(cps)("W midairs")),
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
	Shrine("Kema Kossasa"),
	split(),    
];