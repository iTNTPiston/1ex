import { Cook, Korok, Shop, Shrine, split, step,  Warp } from "../create";
import { cps, lcn, npc, txt } from "../types";

export const GerudoTown = [
	txt("BLSS to ", lcn("gerudo town")),
	txt("Talk to ", npc(" Spy Guy")),
	Shrine("Daqo Chisay"),
	split("-"),
    
	step("WB to kara kara"),
	"Get Gerudo Outfit",
	"WB back to gerudo town",
	Shop("3 Durians"),
	Shop("All Arrows"),
	Cook("10 Speed, Endura/Hearty", "Cook all small radishes"),
	txt("Talk to ", npc("Riju")),
	step("Walk out from back"),
	txt(cps(".W"), " Turn to skeleton"),
	Korok("W47", "Flower Chase", "Right side of skeleton"),
	Warp("Gerudo Tower"),
	split("-"),
];