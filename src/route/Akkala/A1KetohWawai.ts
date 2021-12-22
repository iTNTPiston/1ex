import { ability, Boss, Chest, Equipment, Korok, MakeTOD, ShrineBlessing, split, step } from "../create";
import { cps, fury, gale, important} from "../types";
import { wb } from "../windbomb";

export const KetohWawai = [
	ability(step("Minecart + ", gale()), {gale: 1}),
	Korok("E07", "Lift Rock", "Top of island"),
	step(wb(cps)("<W TS")),
	Korok("K08", "Balloon", "Instant Shoot"),
	step(wb(cps)("W> Turn")),
	Korok("K07", "Balloon", "No BT"),
	MakeTOD("5am", "Morning for Dinraal", "Twice if before 5AM"),
	step(cps("W")),
	Korok("K06", "Acorn in Log", "Shoot from midair"),
	step(wb(cps)("SW midair + <W midairs")),
	Korok("K11", "Lift Rock", "Peak FAR"),
	step(wb(cps)("N> DT")),
	important("EQUIP PHANTOM 3"),
	Korok("K05", "Balloon", "Backflip BT"),
	"Shoot Dinraal, get horn",
	step(wb(cps)("E + E midairs")),
	ability(Boss("Blue Hinox", fury()), {fury: 3}),
	Equipment("Torch"),
	Chest("Ancient Core", "In shrine, get if 1 core"),
	ShrineBlessing("Ketoh Wawai"),
	split("-"),
];