import { ability, Boss, detail, Discover, Korok, Shrine, ShrineDLC, split, step, VariableChange, Warp } from "../create";
import { cps, emy, fury, gale, important, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const DaqoTah = [
	Warp("Kuh Takkar"),
	split("-"),
	
	ability(step(gale(), " SCW"), {gale: 1}),
	VariableChange({tail: 4}),
	detail(
		txt("Kill 4 ", emy("Lizalfos")),
		txt("Be careful not to get item text boxes. Tail ", v("tail"), "/45")),
	itm("Wood"),
	important("DO NOT LOOK BACK"),
	ShrineDLC("Kihiro Moh"),
	split("-"),

	"Throw orb in hole",
	"SQ to shrine DEFUSE",
	Discover("Kihiro Moh Shrine"),
	ability(step(gale(), " + ", wb(cps)("E midairs")), {gale: 1}),
	important("EQUIP SNOW BOOTS"),
	Korok("G17", "Ice Block"),
	step(wb(cps)("S to rock")),
	Korok("G22", "Rock Circle"),
	step(wb(cps)(".E")),
	ability(Boss("Frost Talus", fury()), {fury: 3}),
	step(wb(cps)("NE")),
	Korok("G18", "Ice Block", "Far one"),
	step(wb(cps)("SE")),
	Korok("G23", "Lift Rock", "Peak far"),
	step(wb(cps)("SW")),
	Korok("G27", "Rock Circle", "Platform on cliff"),
	step(wb(cps)("E> Turn")),
	Korok("G28", "Block Puzzle"),
	step(wb(cps)("S> Turn to race start")),
	Korok("G35", "Race", "SQ DEFUSE"),
	ability(step(gale(), " + ", wb(cps)("<W midair")), {gale: 1}),
	Boss("Luminous Talus", "Bomb Arrow"),
	step("SQ"),
	Korok("W19", "Lift Rock"),
	step(wb(cps)("W> + NW")),
	Korok("G34", "Block Puzzle", "Bottom right"),
	step(wb(cps)("<W Turn")),
	Shrine("Daqo Tah"),
	split("-"),
];