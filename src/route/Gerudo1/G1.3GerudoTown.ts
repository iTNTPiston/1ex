import { Cook, detail, Korok, MakeTOD, Shop, split, step, Warp } from "../create";
import { npc, txt, lcn, cps } from "../types";

export const GerudoTown = [
	step("Talk to ", npc("Kass"), " (21)"),
	txt("BLSS to ", lcn("gerudo town")),
	txt("Talk to ", npc(" Spy Guy")),
	"Activate shrine",
    
	step("WB to kara kara"),
	"Get Gerudo Outfit",
	"WB back to gerudo town",
	Shop("All Arrows"),
	Cook("10 Speed, Endura/Hearty"),
	detail(
		MakeTOD("5am", "Make Morning", "for quests"),
		"For trash girl and ice house"),
	txt("Talk to ", npc("Riju")),
	step("Walk out from back"),
	txt(cps(".W"), " Turn to skeleton"),
	Korok("W37", "Flower Chase", "Right side of skeleton"),
	Warp("Kuh Takkar"),
	split(),
];