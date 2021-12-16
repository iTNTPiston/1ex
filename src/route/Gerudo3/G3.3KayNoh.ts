import { ability, Boss, detail, Korok, Shrine, split, step, VariableChange } from "../create";
import { cps, txt, emy, v, fury, gale, itm, npc } from "../types";
import { wb } from "../windbomb";

export const KayNoh = [
	step(wb(cps)("SW")),
	VariableChange({tail: 2}),
	detail(
		txt("3 ", emy("Lizalfos")),
		txt("tail ", v("tail"), "/45")),
	step(wb(cps)("W Turn")),
	"Start race",
	Korok("W08", "Confetti", "Crack during race"),
	Korok("G32", "Race","Run to finish"),
	step(wb(cps)("S>")),
	Korok("W10", "Balloon", "Bomb crack"),
	step(wb(cps)("E")),
	ability(Boss("Luminous Talus", fury()), {fury: 2}),
	step(wb(cps)("W + S> midair")),
	Korok("G35", "Race", "SQ DEFUSE"),
	ability(step(gale(), " + ", "<W midair"), {gale: 1}),
	ability(Boss("Lunimous Talus", txt(fury(), " + 2 BA")),{fury: 1}),
	step(wb(cps)("<S Turn")),
	Korok("W19", "Lift Rock"),
	step(wb(cps)("N>")),
	Korok("W15", "Lift Rock", "On pillar"),
	VariableChange({rushroom: 8}),
	itm("Blizzard spin 4 rushrooms"),
	detail(
		"Glide and shoot 4 more rushrooms",
		txt(v("rushroom"), "/55")),
	txt("Talk to ", npc("Sesami")),
	step(wb(cps)("S")),
	Shrine("Kay Noh"),
	split("-"),
];