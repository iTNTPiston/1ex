import { ability, Boss, Discover, Korok, Shrine, split, step, Warp } from "../create";
import { gale, cps, fury, txt, important } from "../types";
import { wb } from "../windbomb";

export const MakaRah = [
	ability(step(gale()," + ",wb(cps)("<W Turn")), {gale: 1}),
	Korok("H26", "Lift Rock"),
	step(wb(cps)("N> + N> midair")),
	Korok("H19", "Balloon", "First Forest on right"),
	step(wb(cps)("W> Turn")),
	Korok("H18", "Confetti", "Forest with 5 trees"),
	step(wb(cps)("W Turn")),
	Korok("H17", "Rock Circle", "Snowy Platform"),
	step(wb(cps)("S Turn")),
	Korok("H24", "Flower Chase", "Below high forest"),
	step(wb(cps)("E> Turn + E midair")),
	Korok("H25", "Lift Rock", "In corner"),
	step(wb(cps)("<W Turn + W midairs")),
	Korok("H32", "Light Chase", "On flat hill"),
	step(wb(cps)("<S Turn")),
	Korok("H40", "Lift Rock", "Top of hill"),
	step(wb(cps)("W> Turn")),
	ability(Boss("Black Hinox", txt("GEB + ", fury())), {fury: 3}),
	step(wb(cps)("<S to race start")),
	wb(cps)("SE"),
	Korok("H53", "Lift Rock", "Sharp hill"),
	wb(cps)("SW"),
	Korok("H60", "Balloon"),
	wb(cps)("S"),
	Korok("T08", "Lift Rock"),
	Korok("T06", "Race", txt(cps("NE"))),
	"Run",
	Korok("T07", "Rock Circle", "3"),
	step(wb(cps)("NE")),
	important("EQUIP ROYAL GUARD"),
	Korok("T01", "Flower Chase", "Left to rubble"),
	step(wb(cps)("N + <N midairs")),
	Korok("H39", "Flower Chase", "A bit over updraft"),
	"Drop down",
	Discover("Sturnida Secret Spring"),
	step("Updraft up + ", cps("S")),
	Korok("H41", "Rock Circle"),
	step("Shield surf ", cps("SE")),
	Korok("H42", "Lift Rock Blocked", "Drop down 2 levels"),
	step(wb(cps)("E to cave")),
	Shrine("Maka Rah"),
	split("-"),

	Warp("Vah Medoh"),
	split("-"),
];