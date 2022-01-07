import { step, Korok, ability, Boss, VariableChange, detail, Memory, split, Discover, ChestSpecial, Shrine } from "../create";
import { cps, fury, txt, itm, v, lnk } from "../types";
import { wb } from "../windbomb";

export const KaamYatak = [
    step(wb(cps)("W")),
    detail(
        Korok("L67", "Balloon", "Prefire"),
        lnk("https://twitter.com/i_piston/status/1477160362327740417")),
    step(wb(cps)("SE SQ DEFUSE")),
    Korok("L68", "Light Chase"),
    step(wb(cps)("<S Turn")),
    Boss("Stalnox", "8 Shots + 1 Headshot"),
    step(wb(cps)("N> Turn")),
	Korok("L69", "Block Puzzle"),
	step(wb(cps)("N Turn right")),
	Korok("L37", "Acorn in Log"),
	step(wb(cps)("N midairs")),
	Korok("L23", "Confetti", "Top of tree"),
	step(wb(cps)("<N Turn")),
    Korok("P16", "Lift Rock Blocked", "Slab 1 STS hit"),
	Korok("P17", "Lift Rock"),
    step(wb(cps)("W> Turn")),
    Korok("P15", "Rock Circle"),
    step(wb(cps)("<E TS")),
	Korok("P11", "Confetti", "Top of ToT"),
	step(wb(cps)("NW")),
	Korok("P10", "Lily Pads", "No Drown"),
    step(wb(cps)("<N")),
	Korok("P06", "Lift Rock", "Top of hill"),
    "Run to flower",
    Korok("P04", "Flower Chase", "Middle of log"),
	step(wb(cps)(".W")),
	ability(Boss("Stone Talus", fury()), {fury: 1}),
	step(wb(cps)("E")),
	Korok("P05", "Lift Rock Blocked", "Under leaves"),
	step(cps("NE")),
	Korok("P02", "Tree Stump"),
	"Run",
	Korok("P01", "Lift Rock", "Under rocks"),
	step(wb(cps)("NW")),
	Korok("C81", "Light Chase", "In ruins"),
	step(wb(cps)("E> Turn")),
	Korok("C82", "Light Chase"),
	step(wb(cps)("N> Turn")),
	Memory("Lake Kolomo"),
	split("-"),

	step(wb(cps)("<S")),
	Korok("C83", "Balloon", "Rotate to the left"),
	step(wb(cps)("E>")),
	Discover("Gatepost Town Ruins"),
	wb(cps)("N. Turn"),
	Korok("C76", "Lift Rock Blocked", "Under leaves"),
	"Run",
	ChestSpecial("Majors's Mask"),
	step("SQ"),
	Korok("C75", "Lily Pads", "No Drown"),
	step("SQ"),
	ability(Boss("Luminous Talus", fury()), {fury: 2}),
	itm("Luminous/Opal"),
	step(wb(cps)("NW DEFUSE")),
	Korok("C69", "Acorn", "Hanging from tree"),
	step(wb(cps)("N to flower")),
	Korok("C63", "Flower Chase"),
	step("SQ"),
	Korok("C62", "Light Chase"),
	"Run near fountain",
	ChestSpecial("Tingle's Hood"),
	step(cps("NW")),
	Shrine("Kaam Ya'tak"),
	split("-"),
];