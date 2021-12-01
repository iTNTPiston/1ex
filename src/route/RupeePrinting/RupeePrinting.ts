import { Chest, ChestSpecial, detail, Equipment, image, indent, Korok, Section, step, VariableChange, Warp } from "../create";
import { txt, cps, lcn, emy, itm, important, lnk, v } from "../types";
import RouteImage from "./RupeePrinting.png";

export const RupeePrinting = [
	Section("RUPEE PRINTING"),
	image(RouteImage),
	step(cps("<N")," TS to ",lcn("Coliseum")), 
	ChestSpecial("Phantom Helm"),

	step("BLSS"),
	ChestSpecial("Phantom Pants", "Pretty far from road"),

	step(cps("N.")," Turn + ", cps("N"), " midair"),
	ChestSpecial("Phantom Armor", "Equip 3"),

	step(cps("<N")," TS + ", cps("N"), " midair"),
	"Enter Castle",
	detail(Equipment("Royal Claymore + RGC", txt("Sneakstrike ", emy("Moblin"))), "Same as any%, can break box near entrace for rng rushroom"),
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
		txt("Tail ",v("tail"),"/45")),
	Equipment("Boomerang, Shield"),

	VariableChange({tail: 1}),
	detail(
		step("Clip OOB, midair to other side"), 
		txt("Same as any% no amiibo route, Tail ",v("tail"),"/45")),
	txt("Kill ",emy("Lizalfos")," with boomerang"),
	txt("Throw ",itm("Spear"), " and sneakstrike"),
	Equipment("Claymore, RG Bow"),
	txt("Get a ",itm("moblin gut")),
	"Break crates for rng arrows",

	step("Climb up and bomb wall"),
	Korok("X15", "Acorn", "Inside Room"),
	"Turn left bomb both wall",
	ChestSpecial("Royal Guard Uniform"),
	VariableChange({tail: 1}),
	detail(
		txt("Kill ", emy("Lizalfos")), 
		txt("Target him as he jumps and side hop to flurry rush with boomerang. Tail ",v("tail"),"/45")),

	step("Enter dining hall"),
	"Sneak right and throw bomb",
	VariableChange({rushroom: 1}),
	detail(
		txt(itm("Rushroom")," + ",itm("Gourmet Meat")), 
		txt("Rush ",v("rushroom"),"/55")),
	txt(itm("Raw meat"), " on other side"),

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
	detail(
		"Kill stalkers for springs",
		"You have 15 hits on RGC. You can use RGC + atk lv 3 to one shot the legs if you need springs. Need 30 for ancient shield, 15 for radiant shield"),
	Korok("C32", "Shoot Emblem", "Castle Town Gate"),
	"RUPEE PRINTING",
	Korok("C30", "Lift Rock Blocked", "Under rubble was smashed"),
	detail(
		"Use controller swap method",
		"After autosave, press button on another paired controller. Press A on the controller to use, then wait for parts to stop and immediately warp"),
	Warp("Keh Namut", "aka Cryonis"),
];