import { ability, Boss, ChestSpecial, Discover, Korok, Shrine, ShrineBlessing, split, step, Tower } from "../create";
import { gale, cps, fury } from "../types";
import { wb } from "../windbomb";

export const ShaeKatha = [
	ability(step(gale(), " SCW Vaneth"), {gale: 1}),
	Shrine("Shee Vaneth"),
	split("-"),

	Discover("Shee Vaneth Shrine"),
	step(wb(cps)("S High")),
	Shrine("Shee Vaneer"),
	split("-"),

	ability(step(gale(), " to peak"), {gale: 1}),
	Korok("D49", "Offer Apple"),
	step("SQ to other peak"),
	Korok("D40","Lift Rock"),
	step(wb(cps)("E Turn")),
	Korok("D41", "Boulder Golf"),
	step(wb(cps)("N>")),
	Korok("D30", "Offer Apple"),
	step(wb(cps)("N> Turn")),
	ability(Boss("Stone Talus", fury()), {fury: 1}),
	step(wb(cps)("W.")),
	Korok("D17", "Lift Rock (Tree)"),
	step(wb(cps)("S> Turn")),
	ability(Boss("Stone Talus", fury()), {fury: 1}),
	step("SQ to tower"),
	Tower("Dueling Peaks Tower", "81.57%"),
	split("-"),

	step(wb(cps)("<S Turn")),
	Korok("D48", "Lift Rock", "Upper level"),
	step(wb(cps)("SW")),
	Korok("D50", "Lift Rock Blocked", "Under slab"),
	step(wb(cps)("E")),
	Korok("L07", "Boulder Golf", "5 STS hits"),
	step(wb(cps)("S. Turn")),
	Korok("L19", "Lift Rock (Tree)", "Top of big tree"),
	Korok("L20", "Block Puzzle"),
	"Drop down",
	ChestSpecial("Ravio's Hood"),
	Discover("Spring of Courage"),
	ShrineBlessing("Shae Katha"),
	split("-"),
];