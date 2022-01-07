import { ability, Boss, detail, Korok, Shop, ShrineBlessing, ShrineDLC, Snap, split, step } from "../create";
import { cps, emy, fury, gale, lnk, npc, txt } from "../types";
import { wb } from "../windbomb";

export const KeiveTala = [
	step(wb(cps)("E> + S")),
	Korok("W30", "Block Puzzle"),
	step(wb(cps)("S> Turn")),
	Korok("W35", "Balloon", "Between arms. Shoot midair"),
	"Do Puzzle",
	ShrineBlessing("Korsh O'hu"),
	split("-"),
	ability(step(gale(), " + ", cps("S")), {gale: 1}),
	Korok("W40", "Lift Rock", "Top of statue"),
	step(wb(cps)("<W Turn")),
	Korok("W44", "Block Puzzle"),
	step(wb(cps)("SE")),
	txt("Kill ", emy("Blue Lizalfos")),
	Korok("W52", "Block Puzzle", "Inside skull"),
	step(wb(cps)("S Turn to race start")),
	wb(cps)("SE to Molduking"),
	detail(
		ability(Boss("Molduking", txt(fury()," + SHOCK")), {fury: 3}),
		"Shoot shock between furies. No need attack up"),
	Snap(emy("Molduking"), "Snap after shock arrow"),
	"Run to finish race",
	Korok("W63", "Race"),
	"SQ to shrine",
	detail(
		ShrineDLC("Keive Tala"),
		lnk("https://twitter.com/i_piston/status/1466279954484641794")),
	split("-"),
];