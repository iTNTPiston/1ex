import { ChestSpecial, detail, Korok, MakeTOD, ShrineDLC, ShrineDoubleSword, split, step } from "../create";
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
	detail(
		Korok("H30", "Acorn Flying", "After touching 2nd last ring"),
		"If any stal moblin/ice keese spawn near the korok area, drop a bomb and either DSB it or just use daruk's protection. If you mess up at all you have to restart the ring chase"),
	"SQ WB to final ring",
	ShrineDLC("Kiah Toza"),
	split("-"),
];