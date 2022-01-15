import { ChestSpecial, Korok, MakeTOD, ShrineDLC, ShrineDoubleSword, split, step } from "../create";
import { cps, important, itm } from "../types";
import { wb } from "../windbomb";

export const KiahToza = [
	step(wb(cps)("<S")),
	MakeTOD("9pm", "Night", "For Xenoblade Chest"),
	itm("3 wood"),
	Korok("H20", "Confetti", "Top of house"),
	step(wb(cps)("E + S midairs")),
	important("Look Sky SE WATCH LAND"),
	Korok("H28", "Lift Rock"),
	"Drop done",
	ShrineDoubleSword("Goma Asaagh"),
	split("-"),

	step("Surf down"),
	Korok("H35", "Lift Rock", "Clear Ragdoll"),
	step(wb(cps)("E")),
	Korok("H36", "Rock Circle", "2"),
	step(wb(cps)("W to ring")),
	ChestSpecial("Xenoblade Chest", "Get on the way to ring"),
	"SQ WB to final ring",
	ShrineDLC("Kiah Toza"),
	split("-"),
];