import { ability, Boss, detail, Discover, Icon, Korok, ShrineSword, Snap, split, step, Tower, Warp } from "../create";
import { cps, emy, fury, important } from "../types";
import { wb } from "../windbomb";

export const SohKofi = [
	Warp("Vah Ruta"),
	split("-"),
	Snap(emy("Waterblight"), "SNAP Elite"),
	ability(
		detail(
			Icon("ruta-plus", "Waterblight 2", fury()),
			"Phase 1: SNAP; Flurry; 7 hits; Charge Fury (from tail); Phase 2: 3 headshot, fury, 3 headshot, fury"),
		{fury: 3}),
	split("-"),    
	important("EQUIP ATK 3"),
	step(wb(cps)("<N Turn + N midair")),
	Korok("Z15", "Block Puzzle"),
	step(wb(cps)("<W Turn")),
	Korok("Z14", "Confetti", "Top of tree"),
	step(wb(cps)("S> TS")),
	Tower("Lanayru Tower"),
	split("-"),

	step(wb(cps)("<E Turn")),
	Korok("Z22", "Lift Rock", "On hill"),
	"Glide down",
	Boss("Black Hinox", "8 Hits SLAM"),
	step(wb(cps)("W> Turn")),
	Discover("Inogo Bridge"),
	step(wb(cps)("W>")),
	ShrineSword("Soh Kofi"),
	split("-"),
	
];