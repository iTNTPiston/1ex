import { step, Korok, detail, Memory, split, Discover, Shrine, VariableChange, ability } from "../create";
import { cps, gale, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const KayNoh = [
	step(wb(cps)("E Turn")),
	Korok("W43", "Flower Chase"),
	step(wb(cps)("<E Turn")),
	Korok("W37", "Flower Chase", "On skeleton"),
	step(wb(cps)("<N Turn")),
	txt("Talk to ", npc("Shrine Guy")),
	detail(
		txt("Talk to ", npc("Rhondson")),
		"Unequip Gerudo outfit"),
	detail(
		txt("Talk to ", npc("Cold Potion Guy")),
		"Can buy cold darner here. DO NOT GIVE BEETLE"),
	Memory("Kara Kara Bazaar"),
	split("-"),

	step(wb(cps)("<<E")),
	detail(
		Discover("Gerudo Desert Gateway"),
		"Steer through it and make sure you get the location"),
	ability(step(gale()), {gale: 1}),
	Korok("W15", "Lift Rock", "On pillar"),
	VariableChange({rushroom: 8}),
	itm("Blizzard spin 4 rushrooms"),
	txt("Talk to ", npc("Sesami")),
	detail(
		"Glide and shoot 4 more rushrooms",
		txt(v("rushroom"), "/55")),
	step(wb(cps)("S.")),
	Shrine("Kay Noh"),
	split("-"),
	
];