import { ability, Boss, Chest, Korok, MakeTOD, ShrineBlessing, split, step } from "../create";
import { cps, fury, gale } from "../types";
import { wb } from "../windbomb";

export const KetohWawai = [
	ability(step("Minecart + ", gale()), {gale: 1}),
	Korok("E07", "Lift Rock", "Top of island"),
	step(wb(cps)("<W TS")),
	Korok("K08", "Balloon", "Instant Shoot"),
	step(wb(cps)("W> Turn")),
	Korok("K07", "Balloon", "No BT"),
	step(cps("W")),
	Korok("K06", "Acorn in Log", "Shoot from midair"),
	step(wb(cps)("SW midair + <W midairs")),
	Korok("K11", "Lift Rock", "Peak FAR"),
	step(wb(cps)("NW + NW")),
	Korok("H22", "Boulder Golf", "WB away after"),
	step(wb(cps)("NE")),
	Korok("H15", "Block Puzzle"),
	step(wb(cps)("<E Turn")),
	ShrineBlessing("Qaza Tokki"),
	split("-"),
	step(MakeTOD("5am", "Make Morning", "For Dinraal (Fang)")),
	step(wb(cps)("S")),
	Korok("H16", "Balloon", "Bomb tree"),
	step(wb(cps)("E>> Turn")),
	Korok("K05", "Balloon", "Backflip BT"),
	"Shoot Dinraal, get Fang",
	step(wb(cps)("E + E midairs")),
	ability(Boss("Blue Hinox", fury()), {fury: 3}),
	Chest("Ancient Core", "In shrine, get if 1 core"),
	ShrineBlessing("Ketoh Wawai"),
	split("-"),
];