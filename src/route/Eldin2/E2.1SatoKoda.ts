import { detail, Discover, MakeTOD, ShrineDLC, split, step } from "../create";
import { emy, important, txt } from "../types";

export const SatoKoda = [
	step("Shield Surf SCW"),
	MakeTOD("5am", "Make Morning if night", "Trigger Cutscene"),
	ShrineDLC("Sato Koda"),
	split("-"),
	detail(
		txt("AA Kill ", emy("Guardians")),
		"Get to 15 springs"),
	important("CHECK 15 SPRINGS"),
	Discover("Sato Koda Shrine"),
    
];