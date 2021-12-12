import { Korok, ShrineDoubleSword, split, step } from "../create";
import { cps } from "../types";
import { wb } from "../windbomb";

export const ShoqaTatone = [
	step(wb(cps)(".S to peak DEFUSE")),
	Korok("L65", "Race", "Ordinal"),
	step(wb(cps)("S. Turn")),
	Korok("L70", "Acorn Shoot", "Bomb Arrow if can"),
	"Glide to rock circle",
	Korok("L71", "Rock Circle"),
	step(wb(cps)("S + S midair")),
	Korok("L73", "Balloon", "On peak"),
	step(wb(cps)("E Turn")),
	Korok("L74", "Boulder Golf", "Drop down STS"),
	step(wb(cps)("E Turn")),
	Korok("L76", "Boulder Golf", "2 STS hits, STS"),
	step(wb(cps)("S>")),
	Korok("L91", "Rock Circle"),
	"Surf down",
	Korok("L90", "Block Puzzle"),
	step(cps("<W")),
	Korok("L89", "Lily Pads", "SEAWEED"),
	"Run to light chase",
	Korok("L88", "Light Chase"),
	step(cps("W")),
	Korok("L87", "Lift Rock", "Top of rock"),
	"Run down, do quest",
	ShrineDoubleSword("Shoqa Tatone"),
	split("-"),
];