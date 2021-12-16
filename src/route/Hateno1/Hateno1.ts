import { Cook, detail, Equipment, Icon, image, indent, Korok, Section, Shrine, split, step, Tower } from "../create";
import { cps, important, itm, npc, rne, txt } from "../types";

import Hateno1Image from "./Hateno1.png";

export const Hateno1 = [
	Section("HATENO 1"),
	image(Hateno1Image),
	step("Talk to ", npc("farmer"), " for quest"), 
	itm("3-4 frogs"),

	step(cps("N>")," WB to tree"),
	Korok("N42", "Lift Rock (Tree)", "Next to blue flame"),
	detail(
		"Smuggle flame to lab",
		"Get a second torch in lab for farosh in case the torch despawn when farming. Purah all first options. Talk to her until all upgraded (SNAP first)"),
	Icon("camera-plus", "Camera Upgraded"),
	split("-"),

	step(cps("<E"), " Turn WB"),
	Korok("N48", "Lily Pads", "Drown"),
	step(cps("<N"), " Turn WB"),
	Korok("N43", "Lift Rock (Tree)", "middle of lake"),
	step(cps("S>>"), " no turn"),
	txt("Talk to ",npc(" Quest lady")),
	step(cps("<W")," Turn WB"),
	txt("Talk to ",npc("Bolson"), " (112)"),
	Equipment("Hammer"),
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

	step(cps(".S")," to ", npc("Bolson")),
	"Buy House",
	txt("Talk to ",npc("Hudson")),
	"Upgrade House",
	step("Run to flower"),
	Korok("N59", "Flower Chase", "Hill behind house"),
	detail(
		important("RELOAD AUTOSAVE"),
		"To cancel apparatus glitch"),
	step(cps("W"), " Turn"),
	Korok("N58", "Block Puzzle"),
	step(cps("W"), " Turn"),
	detail(
		Korok("N50", "Match Tree", "Use RC. Get Wood"),
		"You want to get wood for every tree you cut"),
	Korok("N49", "Acorn", "In tree. Shoot from far"),
	step(cps("N"), " + ", cps("N"), " midair to tower"),
	Tower("Hateno Tower"),
	split("-"),
];