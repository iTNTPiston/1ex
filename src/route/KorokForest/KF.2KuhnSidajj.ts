import { step, Korok, Tower, split, Discover, IconGeneric, detail, Shrine, indent, VariableChange, Equipment, Shop, Icon, MakeTOD, ChestSpecial, ShrineBlessing, ability, Chest } from "../create";
import { cps, gale, important, itm, lcn, npc, txt, v } from "../types";
import { wb } from "../windbomb";

const SeedsForBows = 12 + 17 + 25;
const SeedsForWeapon = 3 + 5 + 8 + 12;
const SeedsForShield = 1 + 2 + 3;
const SeedsTotal = SeedsForBows + SeedsForWeapon + SeedsForShield;

export const KuhnSidajj = [
	step(cps("SW")),
	Korok("E35", "Rock Circle"),
	step(wb(cps)("W> TS")),
	Korok("K32", "Acorn", "In tree"),
	ability(step(gale()," + ", cps("N>")), {gale: 1}),
	Korok("K31", "Lift Rock", "Top of scaffolding"),
	ability(step(gale()," + midairs"), {gale: 1}),
	Tower("Woodland Tower"),
	split("{2 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),

	detail(
		step(MakeTOD("9pm", "Make Night for BM", "if <9PM")),
		"If you are fast enough, there shouldn't be a BM here so you can skip this"),
	wb(cps)("<<N Turn"),
	ChestSpecial("Korok Mask"),
	step(wb(cps)("NW, surf to forest")),
	Discover("Korok Forest"),
	detail(
		IconGeneric("hestu", npc("Hestu"),0,-SeedsTotal, "Bow - Weapons - Shields"),
		"Get all bows, then get weapons until you don't have enough seed, then get shields"),
	txt("Activate ", lcn("Keo Ruug")),
	"Do shrine if tight on BM",
	step(wb(cps)("E start test of wood")),
	ShrineBlessing("Maag Halan"),
	split("-"),

	detail(
		"Void out/WB",
		"Warp if you are tight on BM"),
	Shrine("Keo Ruug", "Skip BM"),
	split("-"),

	step("Run + WB to ", npc("Okie")),
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
	Equipment("Master Sword"),
	VariableChange({silentPrincess: 3}),
	detail(
		itm("3 Silent Princesses"),
		txt(v("silentPrincess"), "/16")),
	VariableChange({rushroom: 4}),
	detail(
		Shop("4 Rushrooms. All Arrows"),
		txt("Rushroom ", v("rushroom"), "/55")),
	step("WB to shrine"),
	important("EQUIP STEALTH 3"),
	"Farm Frog/Cricket/Wood",
	Chest("Ancient Core"),
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