import { Korok, step, VariableChange, detail, ShrineDoubleSword, split, ability, ingredient } from "../create";
import { cps, txt, emy, v, gale, itm } from "../types";
import { wb } from "../windbomb";

export const KemaKossasa = [
    ability(step(gale()," + ", wb(cps)("N")), {gale: 1}),
    Korok("W01", "Lift Rock"),
    step(wb(cps)(".W + <N midair")),
    Korok("G16", "Light Chase",),
	step(wb(cps)("W Turn")),
	Korok("G20", "Rock Circle"),
	step(wb(cps)(".N DEFUSE")),
	Korok("G15", "Lift Rock"),
	step("Drop, ", wb(cps)("<E Turn midair")),
	Korok("G11", "Race", wb(cps)("<E")),
	step(wb(cps)("W> Turn")),
	VariableChange({tail: 2}),
	detail(
		txt("Kill 2 Black ", emy("Lizalfos")),
		txt("tail: ", v("tail"), "/45")),
	step(wb(cps)("<N + W midair")),
	Korok("G07", "Ice Block", "2 Fire Arrows"),
    VariableChange({rushroom: 2}),
    detail(
        itm("2 Rushroom gliding down"),
        ingredient("rushroom", 55)),
	ShrineDoubleSword("Kema Kossasa"),
	split("-"),    
];