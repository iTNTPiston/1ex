import { detail, Equipment, VariableChange, ChestSpecial, Chest, Korok, step, MakeTOD, Discover } from "../create";
import { txt, emy, v, itm, cps } from "../types";
import { wb } from "../windbomb";

export const EarlyCastle = [
	detail(
		step("BLSS to castle"),
		"Go for unloaded gate. BLSS to the right of the pillar"),
    
	Equipment("Royal Claymore + RGC", txt("Sneakstrike ", emy("Moblin"))),
	ChestSpecial("Royal Guard Boots"),
	Chest("Naydra Fang"),

	detail(
		Korok("X19", "Acorn", "Inside 3AA Room"),
		"Throw another bomb after blowing up wall. Get drops from crates"),
	Chest("3AA"),

	VariableChange({tail: 1}),
	detail(
		step("Sneakstrike ",emy("Lizalfos")),
		txt("Tail ",v("tail"),"/45. Blow up the bomb before he dies as you lit the cooking pot so that his equipments get blown away.")),
	MakeTOD("9pm", "Make Night"),

	VariableChange({tail: 1}),
	detail(
		step("Clip OOB, midair to other side"), 
		txt("Same as any% no amiibo route, Tail ",v("tail"),"/45")),
	txt("Kill ",emy("Lizalfos")," with RC"),
	detail(
		txt("Throw ",itm("Spear"), " and sneakstrike"),
		"Get the lizal spear to throw at him"),
	Equipment("Claymore, RG Bow"),
	"Break crates for rng arrows",

	detail(
		step("Climb up and bomb wall"),
		"Throw circle bomb as your stamina recharges"),
	Korok("X15", "Acorn", "Inside Room"),
	"Turn left bomb both wall",
	ChestSpecial("Royal Guard Uniform"),

	step("Enter dining hall"),
	"Sneak right and throw bomb",
	itm("Hearty Food"),
	VariableChange({rushroom: 1}),
	detail(
		txt(itm("Rushroom")," + ",itm("Gourmet Meat")), 
		txt("Rush ",v("rushroom"),"/55")),
	itm("Sunshroom"),
	itm("Hearty Truffles"),
	detail(
		txt(itm("Banana"), " on other side"),
		"Get other backup food as needed"),
	itm("Raw Meat"),

	step(wb(cps)("N to gatehouse")),
	Chest("5BA", "Second level of gatehouse"),
	Discover("Second Gatehouse"),
	detail(
		"Enter Lynel Fight",
		"Save + reload to make him drop weapon and not have skulls mess up the fight. Use RGB and Royal Claymore to stunlock. Reload if he didn't drop hoof."
	),
	"Blow up eyes",
	"SAVE Reload after eyes die",
	itm("Lynel Hoof"),
	Equipment("Sword Shield Bow", "and arrows"),
	Chest("3AA"),

	step("WB to flagpole"),
	Korok("C29", "Confetti", "Top of flagpole"),
];