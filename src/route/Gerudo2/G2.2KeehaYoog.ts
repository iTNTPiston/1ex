import { detail, Korok, Shrine, Snap, split, step } from "../create";
import { cps, gale } from "../types";
import { wb } from "../windbomb";

export const KeehaYoog = [
	step(wb(cps)("<E Turn")),
	Korok("G08", "Flower Chase", "2 Stam Food"),
	detail(
		"Surf down to block",
		"You might want to freeze the bokos with blizzard rod in case they shoot you and you drop the block."),
	Korok("G04", "Block Puzzle"),
	step(wb(cps)("N> no turn")),
	Korok("G05", "Race", cps("S>")),
	step(wb(cps)("<N Turn to boulders")),
	Korok("G01", "Boulder Golf", "Bomb down STS hit in"),
	"Surf down to statue",
	Snap("Eighth Heroine", "Quest"),
	step(cps("NE")),
	Korok("G02", "Race", "Run"),
	step(gale("3"), "+", cps("E")),
	"GG rock over",
	Korok("G03", "Rock Circle"),
	step(wb(cps)("E Turn + <S Turn")),
	Korok("G06", "Lift Rock", "On wood platform"),
	step(wb(cps)("W> to updraft")),
	Shrine("Keeha Yoog"),
	split(),
];