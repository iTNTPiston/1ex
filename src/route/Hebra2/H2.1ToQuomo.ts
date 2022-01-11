import { step, Korok, Warp, split, ability, Boss, ShrineDoubleSword, ShrineBlessing, Snap, Discover } from "../create";
import { cps, fury, gale, txt, v} from "../types";
import { wb } from "../windbomb";

export const ToQuomo = [
	Warp("Shada Naw", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	step(wb(cps)("W> TS")),
	Korok("H10", "Acorn in Log", "Farthest set of trees"),
	step(wb(cps)("E")),
	Korok("H11", "Confetti", "Top of bare tree"),
	"Glide down",
	Korok("H09", "Lift Rock Blocked", "Under leaves"),
	ability(step(gale(), " + ", cps("NW")), {gale: 1}),
	Korok("H04", "Rock Circle", "Rock behind camp"),
	step(wb(cps)("W Turn")),
	ability(Boss("Stalnox", txt("GEBx6 + ", fury())), {fury: 1}),
	step(wb(cps)("W")),
	Korok("H01", "Block Puzzle"),
	ShrineDoubleSword("Hia Miu"),
	split("-"),

	step("Updraft + ", wb(cps)("<S")),
	Korok("H23", "Lift Rock", "Peak far"),
	step(wb(cps)("N> Turn")),
	Discover("Sherfin Hot Spring"),
	step(wb(cps)("N + E")),
	Korok("H07", "Race", "Surf down FAST"),
	ability(step(gale(), " + ", cps("E + E")), {gale: 1}),
	Korok("H08", "Balloon", "Pre BT"),
	step(wb(cps)("<N down")),
	Korok("H02", "Ice Block", "Left one"),
	"Mountain Clip",
	Korok("H03", "Flower Chase"),
	ShrineBlessing("To Quomo"),
	split("-"),
    
	Snap("Hebra Skeleton", "SNAP Quest"),
];