import { detail, Korok, MakeTOD, Memory, Shrine, Snap, split, step } from "../create";
import { cps, emy, important, txt} from "../types";
import { wb } from "../windbomb";

export const DowNaeh = [
	step(MakeTOD("5am", "Make Morning")),
	step(wb(cps)("NE down")),
	Korok("N19", "Rock Circle"),
	step(wb(cps)("W + W")),
	detail(
		Korok("N18", "Ice Block", "3 Fire Arrows"),
		"Save fire arrow by using it to melt ice and lit wood"),
	detail(
		"NAYDRA FARMING 1",
		"To manipulate Naydra spawn: For claws: Look at Mount Lanayru Peak when sitting at campfire, and look down when you wake up. WB south to naydra. If you get no show, use the back up spot later. After getting claws, wb to peak and look up when setting campfire. If any part falls down the mountain, you should pick them up and you can switch the order of the next 2 koroks if it is better"),
	"4 Horn, 1 Fang, 2 Claws",
	"Scale if failed dupe",
	step(wb(cps)("<W Turn")),
	Korok("N23", "Light Chase", "In forest"),
	step(wb(cps)("<N Turn")),
	Korok("N17", "Race", txt(cps("S"), " Round First DEFUSE")),
	step(wb(cps)("W Turn")),
	important("EQUIP PHANTOM 3"),
	Snap(emy("Lynel"), "SNAP Quest"),
	Memory("Lanayru Road"),
	split("-"),

	important("CHECK 4H 2F 2C 1S"),
	step(wb(cps)("W Turn LOW")),
	Korok("N15", "Lily Pads"),
	step("SQ to middle"),
	Korok("N16", "Lift Rock"),
	step(cps("S")),
	Shrine("Dow Na'eh"),
	split("-"),
];