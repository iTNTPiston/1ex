import { ChestSpecial, detail, Equipment, Korok, split, step, Tower } from "../create";
import { cps } from "../types";
import { wb } from "../windbomb";

export const CentralTower = [
	step(wb(cps)("NW Activate TOD")),
	Equipment("Tree Branch", "For blue flame"),
	step(wb(cps)("W> Turn")),
	Korok("P03", "Block Puzzle"),
	step(wb(cps)("N. super")),
	ChestSpecial("Phantom Helm"),
	step("BLSS"),
	ChestSpecial("Phantom Pants", "Pretty far from road"),
	step(wb(cps)("<N Turn")),
	Korok("C48", "Lift Rock", "Between 2 rocks"),
	detail(
		"WB up Tower",
		"From nearby big tree aim cardinal"),
	Tower("Central Tower"),
	split("-"),

];
