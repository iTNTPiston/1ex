import { ability, split, step, Tower } from "../create";
import { gale, npc, txt } from "../types";

export const GerudoTower = [
	step("BLSS to Gerudo Tower"),
	ability(txt(gale(), " + 2 WB up tower"), {gale: 1}),
	step("Talk to ", npc("Kass"), " (21)"),
	Tower("Gerudo Tower"),
	split("-"),
];