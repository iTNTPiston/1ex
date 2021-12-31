import { step, Korok, Chest, ChestSpecial, Icon, Snap, split, MakeTOD } from "../create";
import { cps, emy, important } from "../types";
import { wb } from "../windbomb";

export const DarkBeast = [
	step(wb(cps)("S> Turn Escape")),
	wb(cps)("S midairs to top of castle"),
	Korok("X05", "Confetti", "Top of Castle"),
	step("Drop down to tower"),
	MakeTOD("9pm", "Make Night", "Only if <9PM"),

	Korok("X06", "Balloon"),
	Chest("5AA"),
	step("Drop down middle"),
	ChestSpecial("Royal Guard Cap", "2nd Floor Sanctum"),
	step("SQ to Zelda Study"),
	Korok("X07", "Confetti", "Top of Zelda's Study"),
	step(cps("E")),
	Korok("X10", "Race", "Glide"),
	important("EQUIP PHANTOM"),
	
	"SKEW BOUNCE",
	Snap(emy("Calamity"), "SNAP Elite"),
	Icon("calamity", "Calamity", "fury 4 Shock 6AA"),
	split("-"),

	Snap(emy("Dark Beast"), "SNAP Elite"),
	important("Clear Skew + Ragdoll"),
	Icon("ganon", "Dark Beast"),
	split("-"),
];