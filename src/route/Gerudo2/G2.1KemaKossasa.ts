import { ability, detail, Discover, Korok, ShrineDLC, ShrineDoubleSword, split, step, VariableChange } from "../create";
import { cps, emy, gale, important, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const KemaKossasa = [
	ability(step(gale(), " SCW"), {gale: 1}),
	detail("","if fail scw do shrine now"),
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
	step(wb(cps)("<E + W + W midairs")),
	important("EQUIP SNOW BOOTS"),
	
];