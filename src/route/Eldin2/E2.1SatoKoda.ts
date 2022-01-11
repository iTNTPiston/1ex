import { detail, Discover, Korok, ShrineDLC, split, step, Warp } from "../create";
import { cps, emy, important, txt, v } from "../types";
import { wb } from "../windbomb";

export const SatoKoda = [
	Warp("Dagah Keek", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	step("Shield Surf SCW"),
	ShrineDLC("Sato Koda"),
	split("-"),
	step(wb(cps)("N>")),
	Korok("Z04", "Lift Rock"),
	detail(
		txt("AA Kill ", emy("Guardians")),
		"Get to 15 springs"),
	important("CHECK 15 SPRINGS"),
	Discover("Sato Koda Shrine"),
    
];