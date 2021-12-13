import { ability, Boss, Chest, detail, Korok, MakeTOD, ShrineBlessing, split, step } from "../create";
import { cps, emy, fury, gale, important, itm, txt } from "../types";
import { wb } from "../windbomb";

export const KetohWawai = [
	ability(step("Minecart + ", gale()), {gale: 1}),
	Korok("E07", "Lift Rock", "Top of island"),
	step(wb(cps)("<W Turn")),
	detail(
		ability(Boss("Igneo Talus", txt(fury(), ", get parts")), {fury: 3}),
		"Opal/Flint"),
	step(wb(cps)("<<W Turn")),
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
	"Shoot Dinraal, get scale",
	detail(
		txt("Kill ", emy("Lynel")," for ", itm("Hoof")),
		"Use GEB to stun, then spin with RGC for double hits"),
	step(wb(cps)("E + E midairs")),
	Boss("Blue Hinox", "6 Spin Hits SLAM"),
	Chest("Ancient Core", "In shrine, get if 1 core"),
	ShrineBlessing("Ketoh Wawai"),
	split("-"),
];