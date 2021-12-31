import { Chest, ChestSpecial, detail, Discover, Equipment, image, indent, Korok, MakeTOD, Section, split, step, Tower, VariableChange, Warp } from "../create";
import { txt, cps, lcn, emy, itm, important, lnk, v } from "../types";
import { wb } from "../windbomb";
import RouteImage from "./RupeePrinting.png";

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
