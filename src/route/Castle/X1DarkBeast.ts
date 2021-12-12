import { step, Korok, Chest, ChestSpecial, Icon, Snap, split } from "../create";
import { cps, emy, important } from "../types";
import { wb } from "../windbomb";

export const DarkBeast = [
	step(wb(cps)("S> Turn Escape")),
	wb(cps)("S midairs to top of castle"),
	Korok("X05", "Confetti", "Top of Castle"),
	step("Drop down to tower"),
	Korok("X06", "Balloon"),
	Chest("5AA"),
	step("Drop down ", cps("S")),
	Korok("X10", "Race", "Glide"),
	step(cps("W")),
	Korok("X08", "Confetti", "Top of Zelda's Study"),
	step(cps("E")),
	important("EQUIP PHANTOM"),
	ChestSpecial("Royal Guard Cap", "2nd Floor Sanctum"),
	"SKEW BOUNCE",
	Snap(emy("Calamity"), "SNAP Elite"),
	Icon("calamity", "Calamity"),
	split("-"),

	Snap(emy("Dark Beast"), "SNAP Elite"),
	important("Clear Skew + Ragdoll"),
	Icon("ganon", "Dark Beast"),
	split("-"),
];