import {  Cook, detail,  Korok, MakeTOD, Shop, split, step,  Warp } from "../create";
import { cps,   lcn, npc, txt } from "../types";

export const GerudoTown = [
	txt("BLSS to ", lcn("gerudo town")),
	txt("Talk to ", npc(" Spy Guy")),
	"Activate shrine",
    
	step("WB to kara kara"),
	"Get Gerudo Outfit",
	"WB back to gerudo town",
	Shop("3 Durians"),
	Shop("All Arrows"),
	Cook("10 Speed, Endura/Hearty"),
	detail(
		MakeTOD("5am", "Make Morning", "for quests"),
		"For trash girl and ice house"),
	txt("Talk to ", npc("Riju")),
	step("Walk out from back"),
	txt(cps(".W"), " Turn to skeleton"),
	Korok("W37", "Flower Chase", "Right side of skeleton"),
	Warp("Gerudo Tower"),
	split("-"),
];