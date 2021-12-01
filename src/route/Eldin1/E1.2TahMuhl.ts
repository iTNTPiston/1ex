import { Boss, detail, Discover, Korok, Shrine, split, step } from "../create";
import { cps, important, itm } from "../types";
import { wb } from "../windbomb";
import { MONUMENT } from "../ZoraDomain1/Z1.4Ruta";

export const TahMuhl = [
	step(wb(cps)("S>> + S midair")),
	Boss("Blue Hinox", "6 Spin Hits SLAM"),
	itm("6 Lotus Seeds"),
	"Run to flower",
	detail(
		Korok("Z24", "Flower Chase", "Stay Grounded"),
		"If you are not grounded for last flower, you will fall down the cliff afterwards"),
	step(cps("SE")),
	Korok("Z34", "Lift Rock", "Peak"),
	step(wb(cps)("<W TS")),
	important("B ONLY FOR MONUMENT"),
	...MONUMENT,
	"Below Ruta",
	step(wb(cps)("N to north side of mountain")),
	...MONUMENT,
	"Run to south side",
	...MONUMENT,
	"Drop down",
	Discover("Oren Bridge"),
	step(cps("NW")),
	"Start letter quest",
	step(cps("N")),
	Korok("Z23", "Tree Stump"),
	detail(
		"Break letter",
		"If letter did not respawn, go back to the korok. At the end, drop the BLSS but do not drop the letter. Take fall damage with Mipha's Grace."),
	"BLSS with letter to end",
	important("Use Mipha's Grace"),
	step(wb(cps)("NE + NE midair")),
	Korok("Z13", "Race", "Ordinal"),
	step(wb(cps)("W Turn")),
	Korok("Z12", "Lily Pads", "Drown"),
	step(wb(cps)("<E DT")),
	Korok("E45", "Race", "ordinal DEFUSE"),
	step(wb(cps)("E + N midair")),
	Shrine("Tah Muhl"),
	split()
];