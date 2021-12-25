import { ChestSpecial, detail, Korok, Memory, Shrine, ShrineDoubleSword, split, step } from "../create";
import { txt, lnk, cps, npc } from "../types";
import { wb } from "../windbomb";

export const TutsuwaNima = [
	step("Drop down to basement"),
	ChestSpecial("Travel Medallion"),
	detail(
		"Clip out, bomb self",
		txt("Labyrinth Clip: ", lnk("https://twitter.com/i_piston/status/1429300984119918595"))),
	wb(cps)("SE to rubble"),
	Korok("A08", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("E Turn")),
	Korok("A09", "Lift Rock Blocked", "Under slab 1 STS hit"),
	step(wb(cps)(".S Turn")),
	Korok("A17", "Flower Count", "Start top of guardian"),
	step(wb(cps)("S> Turn")),
	Korok("A24", "Block Puzzle"),
	step(wb(cps)("SW + SW midair")),
	Korok("A29", "Balloon", "1 BA middle"),
	step(wb(cps)("W to race")),
	Korok("A28", "Race", "Ordinal DEFUSE"),
	step(wb(cps)("NE")),
	Korok("A23", "Rock Circle"),
	step(wb(cps)("W")),
	Shrine("Katosa Aug"),
	split("-"),

	detail(
		step(txt("Talk to "), npc(" Guard")),
		"Quest Lady is near pot if no rain, or inside if rain."),
	txt("Talk to ", npc("Quest Lady")),
	step(wb(cps)("W>")),
	Korok("A19", "Flower Count"),
	step(cps("SW")),
	Korok("A22", "Lift Rock Blocked", "Under Leaves"),
	step(wb(cps)("W> Turn")),
	Korok("A18", "Acorn in Log", "Shoot midair"),
	step(cps("S")),
	Korok("A21", "Lift Rock", "Side of spring"),
	Memory("Spring of Power"),
	split("-"),

	"Dupe scale",
	ShrineDoubleSword("Tutsuwa Nima"),
	split("-"),

	step(wb(cps)("S")),
	Korok("A26", "Block Puzzle"),
	step(wb(cps)("W> Turn")),
	Korok("A20", "Block Puzzle"),
];