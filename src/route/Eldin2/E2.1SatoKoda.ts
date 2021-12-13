import { ability, detail, Discover, MakeTOD, ShrineDLC, split, step } from "../create";
import { emy, gale, important, txt } from "../types";

export const SatoKoda = [
	ability(step(gale()," SCW"), {gale: 1}),
	MakeTOD("5am", "Make Morning if night", "Trigger Cutscene"),
	ShrineDLC("Sato Koda"),
	split("-"),
	detail(
		txt("AA Kill ", emy("Guardians")),
		"Get to 15 springs"),
	important("CHECK 15 SPRINGS"),
	Discover("Sato Koda Shrine"),
    
];