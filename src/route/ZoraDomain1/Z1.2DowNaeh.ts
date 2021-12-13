import { ability, Boss, detail, Korok, MakeTOD, Memory, Shrine, split, step, VariableSet } from "../create";
import { cps, fury, important, sm, txt} from "../types";

export const DowNaeh = [
	step(cps(".S"), " + ", cps("<N"), " Turn Midair"),
	Korok("N18", "Ice Block", "3 Fire Arrows"),
	detail(
		"NAYDRA FARMING 1",
		"To manipulate Naydra spawn: Look at Mt. Lanayru Peak when sitting at campfire, and look down when you wake up. WB south to naydra. If you get no show, use the back up spot later."),
	"4 Horn, 1 Fang, 2 Claws",
	"Scale if failed dupe",
	step(cps("E"), " from N18"),
	Korok("N19", "Rock Circle"),
	step(cps("W>")," Turn + ", cps("W"), " Midair"),
	MakeTOD("5am", "Morning at race start", "if need naydra parts"),
	Korok("N17", "Race", txt(cps("S"), " Round First DEFUSE")),
	step(cps("<S"), " Turn"),
	Korok("N23", "Light Chase", "In forest"),
	step(cps("W>>"), " Turn"),
	important("EQUIP PHANTOM 3"),
	Memory("Lanayru Road"),
	split("-"),

	step(cps("S"), " + ", cps("<N"), " + ", cps("<N"), " Turn"),
	VariableSet({fury: 2}),
	ability(Boss("Blue Hinox", txt("3 Spin Hits SLAM ", fury())), {fury: 1}),
	step(cps("W"), " + ", cps("SW")," midair"),
	Korok("N13", "Rock Circle", "2 separate STS hits"),
	detail(
		MakeTOD("5am", "Make Morning", "if need naydra parts"),
		"S to naydra. shoot, sleep again until have enough parts or rain"),
	step(cps("W")," Turn"),
	Korok("N11", "Boulder Golf"),
	step(cps("<S")),
	ability(Boss("Red Hinox", txt("1 Spin Hit SLAM ", fury())), {fury: 1}),
	step(cps("SE")),
	Korok("N20", "Rock Circle"),
	step("SQ (NE)"),
	sm("Pick up naydra parts"),
	Korok("N15", "Lily Pads", "Place cryo block"),
	step("SQ to middle"),
	Korok("N16", "Lift Rock"),
	important("CHECK 4H 2F 2C 1S"),
	step(cps("S")),
	Shrine("Dow Na'eh"),
	split("-"),
];