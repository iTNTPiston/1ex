import { step, Korok, detail, Warp, split, } from "../create";
import { cps,npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const TarryTown2 = [
	step(wb(cps)("E>")),
	Korok("A27", "Light Chase"),
	step(wb(cps)("S Slight Turn + S midairs")),
	txt("Talk to ", npc("Hudson"), " twice"),
	"30 Wood",
	detail(
		"Place Travel Medallion",
		"Place it facing Link to Hudson"),
];