import { step, Korok, Shrine, split, ability, Boss, Memory, Discover, Snap, ShrineDLC } from "../create";
import { cps, emy, fury, gale, important } from "../types";
import { wb } from "../windbomb";

export const KamiaOmuna = [
	step(wb(cps)("<N")),
	Korok("E21", "Block Puzzle"),
	step(wb(cps)("<W")),
	"Do Shrine Quest",
	Shrine("Kayra Mah"),
	split("-"),
	step(wb(cps)("S> Turn")),
	Korok("E27", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("<W slight turn")),
	Korok("E36", "Boulder Golf", "Bomb down"),
	step("Run to talus ledge"),
	ability(Boss("Igneo Talus", fury()), {fury: 3}),
	ability(step(gale(), " + ", wb(cps)("<W Turn")), {gale: 1}),
	Korok("E31", "Rock Circle", "2 rocks"),
	Memory("Eldin Canyon"),
	split("-"),
	step(wb(cps)("N Turn")),
	Korok("E24", "Boulder Golf", "Bomb down"),
	step(wb(cps)("N> Turn")),
	Korok("E25", "Race", "Glide and run"),
	step(wb(cps)("N")),
	Korok("E19", "Balloon","High up"),
	step(wb(cps)("N + E midair")),
	Korok("E18", "Rock Circle", "GG over"),
	step(cps("N")),
	Discover("Stolock Bridge"),
	Korok("E13", "Lift Rock"),
	step("Run + ", cps("S")),
	Korok("E14", "Race", cps("E")),
	step(wb(cps)("NE low")),
	Korok("E10", "Balloon"),
	step(wb(cps)("E + E midair")),
	Korok("E11", "Rock Circle"),
	step(wb(cps)("N> No Turn")),
	Korok("E09", "Lift Rock", "On hanging rock high"),
	"Drop down",
	ability(Boss("Igneo Talus", fury()), {fury: 3}),
	step(wb(cps)("<E Turn")),
	Korok("E06", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("W Turn")),
	Snap(emy("Igneo Talus Titan"), "SNAP Elite"),
	Boss("Igneo Talus Titan", important("EQUIP ATK UP")),
	ShrineDLC("Kamia Omuna"),
	split("-"),

	step(wb(cps)("W + <W midair")),
	Shrine("Shora Hah"),
	split("-"),
];