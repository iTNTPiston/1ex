import { step, Korok, Tower, split, Discover, IconGeneric, detail, Shrine, indent, VariableChange, Equipment, Shop, Icon, MakeTOD, ChestSpecial, ShrineBlessing } from "../create";
import { cps, gale, important, itm, lcn, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const KuhnSidajj = [
	step(cps("SW")),
	Korok("E35", "Rock Circle"),
	step(wb(cps)("W> TS")),
	Korok("K32", "Acorn", "In tree"),
	step(gale("2")," + ", cps("N>")),
	Korok("K31", "Lift Rock", "Top of scaffolding"),
	step(gale("3")," + midairs"),
	Tower("Woodland Tower"),
	split("-"),

	step(MakeTOD("9pm", "Make Night for BM")),
	wb(cps)("<<N Turn"),
	ChestSpecial("Korok Mask"),
	step(wb(cps)("NW, surf to forest")),
	Discover("Korok Forest"),
	detail(
		IconGeneric("hestu", npc("Hestu"),0,-134, "Bow - Weapons - Shields"),
		"Get all bows, then get weapons until you don't have enough seed, then get shields"),
	txt("Activate ", lcn("Keo Ruug")),
	"Do shrine if tight on BM",
	step(wb(cps)("E start test of wood")),
	ShrineBlessing("Maag Halan"),
	split("-"),

	detail(
		"Void out",
		"Warp if you are tight on BM"),
	Shrine("Keo Ruug", "Skip BM"),
	split("-"),

	step("Run + WB to ", npc("Okai")),
	"Start Escort",
	step(cps("E")),
	npc("Riddles of Hyrule"),
	indent("Apple"),
	indent("Pumpkin"),
	indent("Sunshroom"),
	indent("Voltfin"),
	indent("Hoof"),
	VariableChange({rushroom: 1}),
	detail(
		itm("Rushroom"),
		txt("Above Walton. ", v("rushroom"), "/55")),
	txt("Break pots for ", itm("Acorns")),
	step(itm("Egg"), " behind ", npc("Hestu")),
	Equipment("Korok Leaf"),
	Equipment("Master Sword"),
	VariableChange({silentPrincess: 3}),
	detail(
		itm("3 Silent Princesses"),
		txt(v("silentPrincess"), "/16")),
	step(npc("Blupee Guy"), " inside Deku tree"),
	VariableChange({rushroom: 4}),
	detail(
		Shop("4 Rushrooms. All Arrows"),
		txt("Rushroom ", v("rushroom"), "/55")),
	step("WB to shrine"),
	important("EQUIP STEALTH 3"),
	"Farm Frog/Cricket/Wood",
	"Scan rushrooms",
	ShrineBlessing("Daag Chokah"),
	split("-"),

	"Void out",
	detail(
		Icon("tots", "Trial of the Sword"),
		"Grab Silent Princesses if they respawn after TOTS"),
	split("-"),

	step("Run to quest guy"),
	wb(cps)("<W Turn to lake"),
	Equipment("Rusty Shield", "Keep for korok"),
	ShrineBlessing("Kuhn Sidajj"),
	split("-"),
];