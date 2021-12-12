import { Chest, detail, Korok, ShrineSword, Snap, split, step } from "../create";
import { cps, emy, txt } from "../types";
import { wb } from "../windbomb";

export const DaHesho = [
	step("SQ west-ish"),
	Korok("A41", "Lift Rock Blocked", "Under Leaves"),
	step(wb(cps)("N> no turn")),
	Korok("A40", "Lift Rock Blocked", "Under Leaves"),
	"Drop down",
	Korok("A39", "Lift Rock (Door)"),
	step(wb(cps)("<E TS")),
	Korok("A37", "Lift Rock", "Top of stone structure"),
	step("SQ to guardians"),
	detail(
		txt("Kill 2 ", emy("Guardians")),
		"If have ancient arrow use that. If not, use RGC to cut the legs and then spin. Get parts if need. Can also use 3 furies if you have them"),
	Snap(emy("Guardian Stalker"), "Quest"),
	detail(
		"Wb to Tarry Town",
		"10 Wood"),
	step(wb(cps)("S + <S midair to trees")),
	Korok("A49", "Match Tree", "Right tree"),
	step(cps("W>")),
	Chest("Giant Ancient Core", "Inside shrine"),
	detail(
		ShrineSword("Da Hesho", "GEB down for parts"),
		"Snap guardian if you forgot to snap the one in naboris"),
	split("-"),
];