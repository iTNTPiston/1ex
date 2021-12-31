import { ability, Boss, detail, Korok, MakeTOD, Shrine, split, step, VariableSet } from "../create";
import { cps, fury, important, npc, txt } from "../types";
import { wb } from "../windbomb";

export const MezzaLo = [
	important("EQUIP ATK 3"),
	step(wb(cps)("N> + W")),
	Korok("N20", "Rock Circle"),
	step("SQ to Hinox"),
	ability(Boss("Red Hinox", txt("1 Spin Hit SLAM ", fury())), {fury: 1}),
	step(wb(cps)("N. Turn")),
	Korok("N11", "Boulder Golf", "WB away after"),
	step(wb(cps)("E.")),
	Korok("N13", "Boulder Circle", "2 separate STS hits"),
	step(wb(cps)("<E Turn")),
	ability(Boss("Blue Hinox", txt("3 Spin Hits SLAM ", fury())), {fury: 1}),
	step(wb(cps)("<N Turn")),
	Korok("N06", "Confetti", "Top of tall tree"),
	step(wb(cps)(".W Turn")),
	Korok("N05", "Light Chase", "Small pond"),
	step(cps("W")," to deer, ride to ", npc("Kass")),
	txt("Talk to ", npc("Kass")),
	step(cps("W")),
	Korok("N04", "Acorn Flying", "Bullet time"),
	step(cps("NW")),
	Korok("N02", "Lift Rock (Tree)"),
	step(cps("E")),
	Korok("N03", "Lift Rock (Tree)", "behind shrine"),
	Shrine("Mezza Lo"),
	split("-"),
];