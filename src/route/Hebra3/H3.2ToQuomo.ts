import { step, Korok, Warp, split, ability, MakeTOD, Boss, ShrineDoubleSword, ShrineBlessing, Snap, Discover } from "../create";
import { cps, fury, gale, txt} from "../types";
import { wb } from "../windbomb";

export const ToQuomo = [
	step(wb(cps)("W> TS")),
	Korok("H10", "Acorn in Log", "Farthest set of trees"),
	step(wb(cps)("E")),
	Korok("H11", "Confetti", "Top of bare tree"),
	"Glide down",
	Korok("H09", "Lift Rock Blocked", "Under leaves"),
	ability(step(gale(), " + ", cps("NW")), {gale: 1}),
	Korok("H04", "Rock Circle", "Rock behind camp"),
	MakeTOD("9pm", "Make Night"),
	step(wb(cps)("W Turn")),
	ability(Boss("Stalnox", txt("GEB + ", fury())), {fury: 3}),
	step(wb(cps)("W")),
	Korok("H01", "Block Puzzle"),
	ShrineDoubleSword("Hia Miu"),
	split("-"),

	step(wb(cps)("S updraft + <S")),
	Korok("H23", "Lift Rock", "Peak far"),
	step(wb(cps)("N> Turn")),
	Discover("Sherfin Hot Spring"),
	ability(step(gale(), " + ", cps("N")), {gale: 1}),
	Korok("H07", "Race", "Surf down FAST"),
	ability(step(gale(), " + ", cps("E")), {gale: 1}),
	Korok("H08", "Balloon", "Peak"),
	step(wb(cps)("N down")),
	Korok("H02", "Ice Block", "Left one"),
	"Mountain Clip",
	Korok("H03", "Flower Chase"),
	ShrineBlessing("To Quomo"),
	split("-"),
    
	Snap("Hebra Skeleton", "SNAP Quest"),
	Warp("Kuh Takkar"),
	split("-"),
];