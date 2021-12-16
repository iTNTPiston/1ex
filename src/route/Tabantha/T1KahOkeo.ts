import { ability, Boss, Korok, MakeTOD, Shrine, split, step } from "../create";
import { cps, fury, gale, txt } from "../types";
import { wb } from "../windbomb";

export const KahOkeo = [
	step(MakeTOD("5am", "Make Morning TWICE", "For Dinraal (Claw)")),
	ability(txt(gale()," + ",wb(cps)("N + <N + W>")), {gale: 1}),
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