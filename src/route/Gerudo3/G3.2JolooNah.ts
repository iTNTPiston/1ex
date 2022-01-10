import { step, Korok, ability, Boss, Shrine, split, Discover } from "../create";
import { cps, fury, important, v } from "../types";
import { wb } from "../windbomb";

export const JolooNah = [

	step(wb(cps)("W> Turn")),
	Korok("W14", "Lift Rock", "End of bridge"),
	step("SQ to talus"),
	ability(Boss("Luminous Talus", fury()), {fury:3}),
	important("BURN OUT FURY"),
	step(cps("NW High")),
	Korok("W07", "Block Puzzle", "DEFUSE"),
	"Drop down summon horse",
	"Sell white horse",
	step(cps("N.")),
	Shrine("Joloo Nah"),
	split("{4 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),
];