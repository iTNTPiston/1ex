import { ability, Boss, ChestSpecial, detail, Discover, Korok, Memory, Shrine, split, step, VariableChange } from "../create";
import { cps, fury, txt, itm, v } from "../types";
import { wb } from "../windbomb";

export const KaamYatak = [
	step(wb(cps)("N + N midair")),
	Korok("P11", "Confetti", "Top of ToT"),
	"Glide to pond",
	Korok("P10", "Lily Pads", "No Drown"),
	step(wb(cps)("NW")),
	ability(Boss("Talus", fury()), {fury: 1}),
	VariableChange({honey: 1}),
	detail(
		txt("Run to ", itm("Honey")),
		txt("Honey: ", v("honey"), "/16")),
	"Run to flower",
	Korok("P04", "Flower Chase", "Middle of log"),
	step(wb(cps)("S")),
	Korok("P06", "Lift Rock", "Top of hill"),
	step("SQ DEFUSE"),
	Korok("P05", "Lift Rock Blocked", "Under leaves"),
	step(cps("NE")),
	Korok("P02", "Tree Stump"),
	"Run",
	Korok("P01", "Lift Rock", "Under rocks"),
	step(wb(cps)("N. Turn")),
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