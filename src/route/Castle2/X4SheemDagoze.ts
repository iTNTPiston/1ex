import { step, Boss, Korok, Shrine, split, Discover } from "../create";
import { cps, important, txt, npc } from "../types";
import { wb } from "../windbomb";

export const SheemDagoze = [
	step(wb(cps)("S + S> midair")),
	important("EQUIP PHANTOM"),
	Boss("Blue Hinox", "6 Hits SLAM"),
	"Run",
	Korok("R40", "Lift Rock Blocked", "Under slab"),
	step(wb(cps)("W>> start race")),
	Korok("R25", "Race", "Ordinal Delay"),
	step(wb(cps)("S> Turn")),
	Korok("R39", "Light Chase", "Near 2 rocks"),
	step(wb(cps)("S SQ")),
	Korok("R41", "Flower Count"),
	txt("Surf to ", npc("Kass")),
	Discover("Jeddo Bridge"),
	wb(cps)("W to shrine"),
	"RGB aim top of hole",
	Shrine("Sheem Dagoze"),
	split("-"),
];