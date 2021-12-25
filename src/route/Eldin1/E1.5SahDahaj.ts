import { step, Discover, Korok, Boss, Shrine, split, ability } from "../create";
import { cps, fury } from "../types";
import { wb } from "../windbomb";

export const SahDahaj = [
	step("Run forward"),
	Korok("A47", "Offer Apple"),
	step(wb(cps)("S Turn")),
	Discover("East Sokkala Bridge"),
	wb(cps)("E. Midair"),
	Korok("A51", "Basketball", "GG rock throw"),
	step(wb(cps)("S>")),
	Discover("Sokkala Bridge"),
	"Run to third bridge",
	Discover("West Sokkala Bridge"),
	Korok("A52", "Lift Rock", "Below bridge"),
	step(cps("NW")),
	ability(Boss("Blue Hinox", fury()),{fury: 3}),
	step(wb(cps)("<N + N midair")),
	Discover("Akkala Bridge Ruins"),
	wb(cps)("<W turn"),
	Korok("E39", "Basketball", "no GG throw"),
	step(wb(cps)(".N no turn")),
	Shrine("Sah Dahaj"),
	split("-"),
];