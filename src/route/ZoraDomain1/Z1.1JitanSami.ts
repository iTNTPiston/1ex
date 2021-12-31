import { Boss, detail, Korok, ShrineBlessing, Snap, split, step } from "../create";
import { cps, emy, important, txt } from "../types";

export const JitanSami = [
	important("EQUIP PHANTOM 2 + SNOW"),
	step(cps("<E"), " Turn to flower"),
	Korok("N44", "Flower Chase"),
	step(cps("<N"), " midairs to Naydra"),
	Snap(emy("Naydra"), "SNAP Elite"),
	detail(
		"Shoot Eye",
		"Shoot the one near tail for the first one, so you can shoot the second one on her head which is faster"),
	step(cps(".W")),
	Korok("N24", "Ice Block", "Behind peak 4 Fire Arrows"),
	"Shoot Eye",
	step(cps("<S"), " DT"),
	Korok("N31", "Ice Block", "3 Fire Arrows"),
	step(cps("W"), " to tree"),
	"Shoot Eye",
	Korok("N39", "Race", txt(cps("W"), " Round First")),
	step(cps("W>"), " Turn midair + ", cps("NW")," midair"),
	Korok("N21", "Lift Rock", "Peak (FAR)"),
	step(cps("E"), " Turn"),
	Korok("N22", "Block Puzzle"),
	step("Run to lake, put cryo block"),
	Korok("N29", "Lily Pads", "No Drown"),
	step("SQ WB to trees"),
	Korok("N30", "Match Tree", "Farthest tree from lake"),
	step(cps("N")),
	Boss("Red Hinox", "5 Bomb Arrows (midair)"),
	"Shoot Eye",
	detail(
		"Scale Dupe",
		"Align, backflip + backflip swing, mag drop, backflip, stasis, slam, forward jump 3 times, spam A"),
	ShrineBlessing("Jitan Sa'mi"),
	split("-"),
];