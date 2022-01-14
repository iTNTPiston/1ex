import { ability, Equipment, ShrineDoubleSword, split, step, Tower, Warp } from "../create";
import { cps, gale, itm, npc } from "../types";
import { wb } from "../windbomb";

export const SasaKai = [
	Warp("Keh Namut"),
	split("{Placarime Kahfaroh}"),
	step("BLSS + climb to Sasa Kai"),
	ability(step(gale(), " + ", wb(cps)("W + N")), {gale: 1}),
	"Enter Cave",
	Equipment("Radiant Shield, Bow"),
	itm("5 BA left chest"),
	step(wb(cps)("<<S")),
	Tower("Gerudo Tower"),
	split("-"),
	step("Talk to ", npc("Kass"), " (21)"),
	step("SQ to pedestal"),
	ShrineDoubleSword("Sasa Kai"),
	split("-"),

];