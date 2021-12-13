import { ability, split, step, Tower } from "../create";
import {  gale, npc, txt, v } from "../types";

export const GerudoTower = [
	step("BLSS to Gerudo Tower"),
	ability(txt(gale(), " + 2 WB up tower"), {gale: 1}),
	step("Talk to ", npc("Kass"), " (21)"),
	Tower("Gerudo Tower"),
	split("{1 | 0", v("srn"), " SRN | 0", v("krk"), " KRK}"),
	
	//TODO move to satori (after lake before tabantha)
	// step(cps(".S"), " TS + ", cps("S")," midair to rock"),
	// Korok("G19", "Rock Circle", "Rock is above"),
	// step(cps("W>>")," around mountain + ", cps("W")),
	// Korok("G13", "Confetti", "Top of tree"),
	// step(cps("N"), " + ", cps("W"), " midair"),
	// Korok("G10", "Rock Circle"),
	// step(cps("W")," + ", cps("S"), " midair"),
	// Korok("G12", "Block Puzzle"),
	// step(cps("<<<S"), " ordinal turn"),
	// itm("Luminous Stones"),
	// Shrine("Kuh Takkar"),
	// split("-"),
];