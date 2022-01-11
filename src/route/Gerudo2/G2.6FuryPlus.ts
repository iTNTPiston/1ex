import { step, Korok, detail, split, Warp, Icon, ShrineBlessing } from "../create";
import { cps, txt, v } from "../types";
import { wb } from "../windbomb";

export const FuryPlus = [
	step(wb(cps)("<W from pedestal")),
	Korok("W68", "Lift Rock", "On pillar"),
	detail(
		step(wb(cps)("W> Turn")),
		"Turn before placing square to acommodate wind"),
	ShrineBlessing("Misae Suma"),
	split("-"),
	step(wb(cps)("W> DEFUSE")),
	Korok("W62", "Rock Circle"),
	step(wb(cps)(".W Turn")),
	Korok("W67", "Match Cactus", "Land"),
	detail(
		Warp("Vah Naboris", txt("Check ", v("krk"), " Koroks")),
		"Check you already have stasis+ equipped (should have for the korok anyway)"),
	split("{Plateau Geruwas}"),
	Icon("naboris-plus", "Thunderblight 2"),
	split("-"),
];