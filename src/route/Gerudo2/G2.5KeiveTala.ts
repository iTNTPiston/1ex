import { ability, Boss, detail, Korok, Shop, ShrineDLC, Snap, split, step } from "../create";
import { cps, emy, fury, lnk, npc, txt } from "../types";
import { wb } from "../windbomb";

export const KeiveTala = [
	step(wb(cps)("N Turn to")," ", npc("Boots Guy")),
	"Talk 3 times",
	step(wb(cps)("<W to top")),
	Korok("W42", "Confetti"),
	step("Drop down"),
	txt("Talk to ", npc("Berry Woman"), " twice"),
	txt("Talk to ", npc("Captain")),
	txt("Talk to ", npc("Molduga Lady <2PM")),
	detail(
		txt("Talk to ", npc("Little Girl")),
		"6AM - 8PM"),
	txt("Talk to ", npc("Flint Lady"), " twice"),
	Shop("All Arrows"),
	txt("Talk to ", npc("Molduga Lady >2PM")),
	txt("Talk to ", npc("Riju (B)")),
	"Run to secret club 3334",
	step(wb(cps)("E Turn")),
	Korok("W43", "Flower Chase"),
	step(wb(cps)("<E Turn")),
	Korok("W37", "Flower Chase", "On skeleton"),
	step(wb(cps)("SE")),
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