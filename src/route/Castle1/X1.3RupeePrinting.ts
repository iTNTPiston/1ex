import { detail, indent, step, Korok, ChestSpecial} from "../create";
import { important, txt, lnk } from "../types";

export const RupeePrinting = [
	"",
	important("SAVE"),
	detail("Part Combinations", txt("Tutorial by Smich: ", lnk("https://youtu.be/FPuzVW2aXl8"))),
	indent("Core = No Pic"),
	indent("Sh Ge = No Pic"),
	indent("Sh Sc Sp = No Pic"),
	indent("Sh Sc/Sp = Elite"),
	indent("Sh = Elite + Gems"),

	step(Korok("C28", "Lift Rock (Door)")),
	"Use door to push guardian",
	ChestSpecial("Phantom Armor", "Get on the way"),
	Korok("C32", "Shoot Emblem", "Castle Town Gate"),
	"RUPEE PRINTING",
	detail(
		Korok("C30", "Lift Rock Blocked", "Under rubble was smashed"),
		"After autosave, press button on another paired controller. Press A on the controller to use, then wait for parts to stop and immediately warp"),
	"Use controller swap method",
];