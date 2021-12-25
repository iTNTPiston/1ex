import { Chest, detail, image, indent, ingredient, MakeTOD, Section, Shop, Shrine, ShrineSword, split, step, VariableChange } from "../create";
import { cps, itm, lcn, npc, sm} from "../types";
import { wb } from "../windbomb";
import Kakariko1Image from "./Kakariko1.png";

export const Kakariko1 = [
	Section("KAKARIKO 1"),
	image(Kakariko1Image),
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

	npc("Talk to Impa"),
	step(MakeTOD("5am", "Make Morning", "for beetle")),
	VariableChange({beetle: 1}),
	detail(
		itm("Beetle"),
		ingredient("beetle", 15)),
	
	detail(
		Shop("Arrow Shop","All Arrows"),
		"Be careful don't go too close to her or she will be scared and you can't buy arrows"),
	indent(sm("Talk twice for ",npc("quest"), " (211)")),
	detail(
		Shop("Material Shop","All Carrots"),
		"Get a boko gut if you don't have lynel gut or a spare core for potion. DO NOT GO CLOSE TO OLD LADY with phantom armor or she will be scared and you won't be able to buy"),

	step(wb(cps)("N")),
	ShrineSword("Ta'loh Naeg"),
	split("-"),

];