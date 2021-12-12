import { step, Discover, Korok, detail, Boss, Shrine, split } from "../create";
import { cps } from "../types";
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
	detail(
		Boss("Blue Hinox", "8 Spin Hits no slam"),
		"6 Spin Hits SLAM if you don't have fury"),
	step(wb(cps)("<N + N midair")),
	Discover("Akkala Bridge Ruins"),
	wb(cps)("<W turn"),
	Korok("E39", "Basketball", "no GG throw"),
	step(wb(cps)(".N no turn")),
	Shrine("Sah Dahaj"),
	split("-"),
];