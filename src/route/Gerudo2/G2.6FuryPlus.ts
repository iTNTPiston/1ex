import { step, Korok, detail, Shrine, split, Warp, Icon } from "../create";
import { cps, important, txt, v } from "../types";
import { wb } from "../windbomb";

export const FuryPlus = [
	step(wb(cps)("<W from pedestal")),
	Korok("W68", "Lift Rock", "On pillar"),
	detail(
		step(wb(cps)("W> Turn")),
		"Turn before placing square to acommodate wind"),
	Shrine("Misae Suma"),
	split(),
	step(wb(cps)("W DEFUSE")),
	Korok("W62", "Rock Circle"),
	step(wb(cps)(".W Turn")),
	Korok("W67", "Match Cactus", "Land"),
	Warp("Naboris", txt("Check ", v("krk"), " Koroks")),
	split(),
	important("EQUIP STASIS+"),
	Icon("naboris-plus", "Thunderblight 2"),
];