import { ability, Boss, detail, Korok, MakeTOD, Shrine, Snap, split, step } from "../create";
import { cps, emy, fury, gale, txt } from "../types";
import { wb } from "../windbomb";

export const KahOkeo = [
	step(ability(txt(gale()," + ",wb(cps)("N + <N + W>")), {gale: 1})),
	detail(
		MakeTOD("5am", "Make Morning TWICE", "For Dinraal (Scale)"),
		"Shoot dinraal and get part as he flies pass during the next few koroks"),
	Snap(emy("Dinraal"), "SNAP Elite"),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(wb(cps)("<W Turn")),
	Korok("R46", "Flower Count"),
	step(wb(cps)("N")),
	Korok("R36", "Lift Rock", "On ledge"),
	step(wb(cps)("W> Turn")),
	Korok("R35", "Race", "SQ DEFUSE"),
	Korok("R34", "Acorn", "Shoot from race"),
	step(wb(cps)("W>")),
	Korok("R33", "Rock Circle"),
	step(wb(cps)("SW")),
	Korok("R32", "Balloon"),
	step(wb(cps)("N>")),
	Shrine("Kah Okeo"),
	split("-"),
];