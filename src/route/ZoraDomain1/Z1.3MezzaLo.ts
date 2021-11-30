import { image, Korok, Shrine, split, step } from "../create";
import { cps, npc, txt } from "../types";

import ZD1Image2 from "./ZoraDomain1-2.png";

export const MezzaLo = [
	image(
		step(cps("<N"), " + ", cps("N"), " midair"),
		ZD1Image2),
	Korok("N05", "Light Chase", "Small pond"),
	step(cps("W")," to deer, ride to ", npc("Kass")),
	txt("Talk to ", npc("Kass")),
	step(cps("W")),
	Korok("N04", "Acorn Shoot", "Bullet time"),
	step(cps("NW")),
	Korok("N02", "Lift Rock (Tree)"),
	step(cps("E")),
	Korok("N03", "Lift Rock (Tree)", "behind shrine"),
	Shrine("Mezza Lo"),
	split(),
];