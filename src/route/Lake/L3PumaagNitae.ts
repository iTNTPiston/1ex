import { ChestSpecial, Korok, ShrineSword, split, step, VariableChange } from "../create";
import { cps, emy, txt } from "../types";
import { wb } from "../windbomb";

export const PumaagNitae = [
	step("Drop down ", cps("SW")),
	VariableChange({tail: 1}),
	txt("Sneakstrike ", emy("Silver Lizalfos")),
	step(cps("SW")),
	Korok("L48", "Lift Rock"),
	"Cryo block down",
	ChestSpecial("Island Lobster Shirt"),
	step(wb(cps)("E>")),
	Korok("L49", "Rock Circle"),
	step("SQ ", cps("NE"), " to islands"),
	"Place 2 cryo blocks",
	Korok("L50", "Block Puzzle"),
	step(cps("SE")),
	Korok("L59", "Lily Pads", "No Drown"),
	step(wb(cps)("S")),
	Korok("L60", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("<E Turn")),
	Korok("L52", "Lift Rock", "On pillar"),
	step(wb(cps)("<E Turn")),
	ShrineSword("Pumaag Nitae", "Snap LAST CHANCE"),
	split("-"),
];