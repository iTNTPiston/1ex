import { ChestSpecial, detail, Korok, MakeTOD, Memory, Shrine, ShrineDoubleSword, split, step } from "../create";
import { txt, lnk, cps, npc, important } from "../types";
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
		MakeTOD("9pm", "Make Night", "For Blood Moon"),
		"If you are fast enough there should not be a blood moon here. However you need to set TOD for GC later so no time loss."),
	detail(
		step(txt("Talk to "), npc(" Guard")),
		"Quest Lady is near pot if no rain, or inside if rain."),
	txt("Talk to ", npc("Quest Lady")),
	important("EQUIP STEALTH 3"),
	step(wb(cps)("W>")),
	"CHECK BLOOD MOON",
	Korok("A19", "Flower Count"),
	step(cps("SW")),
	Korok("A22", "Lift Rock Blocked", "Under Leaves"),
	step(wb(cps)("W> Turn")),
	Korok("A18", "Acorn in Log", "Shoot midair"),
	step(cps("S")),
	Korok("A21", "Lift Rock", "Side of spring"),
	step(cps("S")),
	Korok("A26", "Block Puzzle"),
	step(wb(cps)("W> Turn")),
	Korok("A20", "Block Puzzle"),
	step(wb(cps)("<W Turn")),
	Memory("Spring of Power"),
	split("-"),

	"Dupe scale",
	ShrineDoubleSword("Tutsuwa Nima", "23:30 Enter for BM"),
	split("-"),
];