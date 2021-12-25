import { Chest, ChestSpecial, detail, Discover, Equipment, image, indent, Korok, MakeTOD, Section, split, step, VariableChange, Warp } from "../create";
import { txt, cps, lcn, emy, itm, important, lnk, v } from "../types";
import { wb } from "../windbomb";
import RouteImage from "./RupeePrinting.png";

export const RupeePrinting = [
	Section("RUPEE PRINTING"),
	image(RouteImage),
	step(cps("NW"), " Activate TOD"),
	step(cps("<N")," TS to ",lcn("Coliseum")), 
	ChestSpecial("Phantom Helm"),

	step("BLSS"),
	ChestSpecial("Phantom Pants", "Pretty far from road"),

	step(cps("N.")," Turn + ", cps("N"), " midair"),
	ChestSpecial("Phantom Armor", "Equip 3"),

	step(wb(cps)("<N super + <N midair")),
	wb(cps)("N> from pillar to gate"),
	detail(
		"Enter Castle",
		"Either to the pillar and wb to gate for unloaded gate or go straight to copium. The castle cutscene is likely already loaded so you can't land if going for unloaded gate."),
	Equipment("Royal Claymore + RGC", txt("Sneakstrike ", emy("Moblin"))),
	VariableChange({tail: 2}),
	detail(
		txt("Kill 2 ", emy("Lizalfos")), 
		txt("Need to spin attack as soon as possible. They can one shot you with weapon. Use Claymore. (Tail ",v("tail"),"/45)")),
	ChestSpecial("Royal Guard Boots"),
	Chest("Naydra Fang"),
	Korok("X19", "Acorn", "Inside 3AA Room"),
	Chest("3AA"),

	VariableChange({tail: 1}),
	detail(
		step("Sneakstrike ",emy("Lizalfos")),
		txt("Tail ",v("tail"),"/45. You can pickup his shield as backup against the lynel later")),
	MakeTOD("5am", "Make Morning"),

	VariableChange({tail: 1}),
	detail(
		step("Clip OOB, midair to other side"), 
		txt("Same as any% no amiibo route, Tail ",v("tail"),"/45")),
	txt("Kill ",emy("Lizalfos")," with RC"),
	detail(
		txt("Throw ",itm("Spear"), " and sneakstrike"),
		"Can get the lizal spear if you don't have boko spear"),
	Equipment("Claymore, RG Bow"),
	"Break crates for rng arrows",

	step("Climb up and bomb wall"),
	Korok("X15", "Acorn", "Inside Room"),
	"Turn left bomb both wall",
	ChestSpecial("Royal Guard Uniform"),
	VariableChange({tail: 1}),
	detail(
		txt("Kill ", emy("Lizalfos")), 
		txt("Target him as he jumps and side hop to flurry rush with RC. Tail ",v("tail"),"/45")),

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
		txt(itm("Raw meat"), " on other side"),
		"Get other backup food as needed"),

	step(wb(cps)("N to gatehouse")),
	Chest("5BA", "Second level of gatehouse"),
	Discover("Second Gatehouse"),
	detail(
		"Enter Lynel Fight",
		"Save + reload to make him drop weapon and not have skulls mess up the fight. Use RGB and Royal Claymore to stunlock. Can spin one cycle with RGC. Reload if he didn't drop hoof."
	),
	"Blow up eyes",
	"SAVE Reload after eyes die",
	itm("Lynel Hoof"),
	Equipment("Sword Shield Bow", "and arrows"),
	Chest("3AA"),

	step("WB to flagpole"),
	Korok("C29", "Confetti", "Top of flagpole"),
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
	Korok("C32", "Shoot Emblem", "Castle Town Gate"),
	"RUPEE PRINTING",
	Korok("C30", "Lift Rock Blocked", "Under rubble was smashed"),
	detail(
		"Use controller swap method",
		"After autosave, press button on another paired controller. Press A on the controller to use, then wait for parts to stop and immediately warp"),
	Warp("Keh Namut", "aka Cryonis"),
	split("-"),
];