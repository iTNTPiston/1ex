import { ability, Boss, detail, Icon, Korok, ShrineSword, Snap, split, step, Tower } from "../create";
import { cps, emy, gale, important } from "../types";
import { wb } from "../windbomb";

export const LanayruTower = [
	Snap(emy("Waterblight"), "SNAP Elite"),
	ability(
		detail(
			Icon("ruta-plus", "Waterblight 2"),
			"Phase 1: SNAP; Flurry; 7 hits; Charge Fury (from tail); Phase 2: 3 headshot, fury, 3 headshot, fury"),
		{fury: 3}),
	split("-"),    
	important("EQUIP ATK 3"),
	step(wb(cps)("<N Turn + N midair")),
	Korok("Z15", "Block Puzzle"),
	step(wb(cps)("<W Turn")),
	Korok("Z14", "Confetti", "Top of tree"),
	step(wb(cps)("<S Turn")),
	Korok("Z31", "Basketball"),
	step(wb(cps)("NW")),
	Boss("Black Hinox", "8 Hits SLAM"),
	step(wb(cps)("N> DEFUSE")),
	Korok("Z22", "Lift Rock", "On hill"),
	step(wb(cps)("W> Turn")),
	ShrineSword("Soh Kofi"),
	split("-"),

	ability(step(gale(), " + ", cps("S")), {gale: 1}),
	ability(gale(), {gale: 2}),
	Tower("Lanayru Tower"),
	split("-"),
];