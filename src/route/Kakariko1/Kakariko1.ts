import { Chest, detail, image, indent, MakeTOD, Section, Shop, Shrine, split, step, VariableChange } from "../create";
import { cps, itm, lcn, npc, sm, txt, v } from "../types";
import Kakariko1Image from "./Kakariko1.png";

export const Kakariko1 = [
	Section("KAKARIKO 1"),
	image(Kakariko1Image),
	step(cps(".E"), " activate TOD"),
	step("BLSS to ", lcn("Kaya Wan")),
	detail(
		step(Chest("Ancient Core", "Skip if 4 cores")),
		"3-5/3 Cores"),
	Shrine("Kaya Wan", "Pick up parts if needed"),
	split("-"),
    
	step(cps("E>"), " TS to ", lcn("Daka Tuss")),
	detail(
		Shrine("Daka Tuss"),
		"Bombs do quarter heart dmg with 2 pieces of phantom armor"),
	split("-"),

	step(cps("S"),"+",cps("E>>>"),"+",cps("S")," midair to Impa"),

	step(MakeTOD("5am", "Make Morning", "for beetle")),
	detail(
		Shop("Material Shop","All Carrots"),
		"Get a boko gut if you missed moblin gut in castle"),
	VariableChange({beetle: 1}),
	detail(
		itm("Beetle"),
		txt("Beetle ", v("beetle"), "/15")),
	Shop("Arrow Shop","All Arrows"),
	indent(sm("Talk twice for ",npc("quest"), " (211)")),
	step("2 Hearts"),
	detail(
		txt("Activate ",lcn("Ta'loh Naeg")),
		"Don't do shrine yet"),
	step(cps("N")," high WB up hill"),
	VariableChange({silentPrincess: 2}),
	detail(
		itm("2 Silent Princesses"),
		txt(v("silentPrincess"), "/16")),
	itm("Grab >2 night shades"),
	txt("BLSS to ", lcn("Hateno")),
];