import { Cook, detail, Equipment, Icon, image, indent, Korok, Section, Shrine, Snap, split, step, Tower, VariableChange } from "../create";
import { cps, important, itm, lcn, npc, rne, txt, v } from "../types";
import { wb } from "../windbomb";

import Hateno1Image from "./Hateno1.png";

export const Hateno1 = [
	Section("HATENO 1"),
	image(Hateno1Image),
	step(wb(cps)("N to hill")),
	VariableChange({silentPrincess: 3}),
	detail(
		itm("3 Silent Princesses"),
		txt(v("silentPrincess"), "/19")),
	itm("Grab >2 night shades"),
	txt("BLSS to ", lcn("Hateno"), " farmer"),

	detail(
		step("Talk to ", npc("Farmer")), 
		"Farmer loads in first so talk to him is faster"),
	itm("3 frogs"),
	"Run to statue",
	"2 Hearts",

	step(wb(cps)("N. to tree")),
	Korok("N42", "Lift Rock (Tree)", "Next to blue flame"),
	detail(
		"Smuggle flame to lab",
		"Throw away tree branch and get torch in lab. Purah all first options. Talk to her until all upgraded (SNAP first)"),
	Equipment("Torch"),
	Snap("Purah", "Don't forget this"),
	Icon("camera-plus", "Camera Upgraded"),
	split("-"),

	step(cps("<E"), " SQ"),
	Korok("N48", "Lily Pads", "Drown"),
	detail(
		step(cps("<N"), " Turn"),
		"Heal to 5.5 Hearts here"),
	Korok("N43", "Lift Rock (Tree)", "middle of lake"),
	step(cps("S>"), " no turn"),
	txt("Talk to ",npc(" Quest lady")),
	step(cps("<W")," Turn"),
	txt("Talk to ",npc("Bolson"), " (112)"),
	detail(
		Cook("Speed + Cold + Stealth", "Moblin gut for speed"),
		"Darner + screw/other parts for cold. 1-2 night shades for stealth. Only need Lv1 stealth"),
	step("SQ WB to shrine"),
	important("EQUIP ",rne("Camera")," before enter"),
	detail(
		important("SAVE BEFORE EXIT"),
		"Save so that the next autosave does not override the autosave inside Shrine."),
	Shrine("Myahm Agana"),
	split("-"),
    
	detail(
		step("SQ WB to statue"),
		"Text Options: GIVE = 11, BUY = 12, Switch Container = 22. When your stam is full, 21 to keep buying hearts."),
	"GIVE 3, SAVE (All first opt)",
	detail(
		"Load in shrine, Glitch",
		"Autosave image might be before you enter shrine"),
	"GIVE 3, SAVE (6)",
	"Load in shrine, Glitch",
	"GIVE 3, SAVE (9)",
	"Load in shrine, Glitch",
	indent("Dupe speed potion"),
	"GIVE 1, SAVE (5H/10)",
	"",
	"BUY 10H (15H/0)",
	"WB to shrine, Glitch",
	"BUY 5S5H (20H/0)",
	"WB to shrine, Glitch",
	"BUY 5S5H (25H/0)",
	detail(
		important("CHECK 25 HEARTS"),
		"Need 25 + 3 containers = 28 hearts"),

	step(cps("<S")," to ", npc("Bolson")),
	"Buy House",
	txt("Talk to ",npc("Hudson")),
	Icon("tarry-town-initial", "Tarry Town H"),
	split("-"),

	"Upgrade House",
	step("Run to flower"),
	Korok("N59", "Flower Chase", "6 before going right"),
	detail(
		important("RELOAD AUTOSAVE"),
		"To cancel apparatus glitch"),
	step(cps("W"), " Turn"),
	Korok("N58", "Block Puzzle"),
	step(wb(cps)("SW")),
	VariableChange({heartyBass: 5}),
	detail(
		itm("5 Hearty Bass"),
		"Shock arrow and put cryo"),
	step(wb(cps)("W> Turn")),
	detail(
		Korok("N50", "Match Tree", "Get Wood"),
		"You want to get wood for every tree you cut. When you have Lynel Sword you want to use that first to save durability on RGC"),
	Korok("N49", "Acorn", "In tree. Shoot from N50"),
	step(cps("N"), " + ", cps("N"), " midair to tower"),
	Tower("Hateno Tower"),
	split("-"),
];