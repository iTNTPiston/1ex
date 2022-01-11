import { Cook, Korok, MakeTOD, Shop, Shrine, split, step, Warp } from "../create";
import { cps, npc, txt } from "../types";
import { wb } from "../windbomb";

export const GerudoTown = [
	step(wb(cps)("S> DT")),
	txt("Talk to ", npc(" Spy Guy")),
	Shrine("Daqo Chisay"),
	split("-"),
    
	step("WB to kara kara"),
	"Get Gerudo Outfit",
	"WB back to gerudo town",
	Shop("3 Durians"),
	Shop("All Arrows"),
	Cook("10 Speed, Endura/Hearty", "Cook all small radishes"),
	MakeTOD("12pm", "Make Noon", "For quests after Naboris"),
	txt("Talk to ", npc("Riju")),
	step("Walk out from back"),
	txt(cps(".W"), " Turn to skeleton"),
	Korok("W47", "Flower Chase", "Right side of skeleton"),
	Warp("Sasa Kai"),
	split("-"),
];