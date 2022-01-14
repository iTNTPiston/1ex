import { ChestSpecial, detail, Korok, split, step, Tower } from "../create";
import { cps } from "../types";
import { wb } from "../windbomb";

export const CentralTower = [
	step(wb(cps)("<N TS")),
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
