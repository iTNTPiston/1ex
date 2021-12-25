import { detail, Discover, Korok, MakeTOD, ShrineDLC, split, step } from "../create";
import { cps, emy, important, txt } from "../types";
import { wb } from "../windbomb";

export const SatoKoda = [
	step("Shield Surf SCW"),
	MakeTOD("5am", "Make Morning if night", "Trigger Cutscene"),
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