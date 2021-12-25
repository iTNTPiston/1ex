import { step, Korok, Tower, split, Discover, IconGeneric, detail, Shrine, indent, VariableChange, Equipment, Shop, Icon,ChestSpecial, ShrineBlessing, ability, Chest, Warp } from "../create";
import { cps, gale, important, itm, npc, txt, v } from "../types";
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
	split("-"),

	detail(step(wb(cps)("<<N Turn")),
		"If you are too slow, can make night here for BM. You don't want BM to happen during oaki"),
	ChestSpecial("Korok Mask"),
	step(wb(cps)("W> surf to forest")),
	Discover("Korok Forest"),
	VariableChange({silentPrincess: 3}),
	detail(
		itm("3 Silent Princesses"),
		txt(v("silentPrincess"), "/19")),
	step("WB to ", npc("Oaki")),
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
	detail(
		IconGeneric("hestu", npc("Hestu"),0,-SeedsTotal, "Bow - Weapons - Shields"),
		"Get all bows, then get weapons until you don't have enough seed, then get shields"),
	"Activate Keo Ruug",
	Equipment("Korok Leaf"),
	Equipment("Master Sword"),
	VariableChange({rushroom: 4}),
	detail(
		Shop("4 Rushrooms. All Arrows"),
		txt("Rushroom ", v("rushroom"), "/55")),
	step("WB to shrine"),
	important("EQUIP STEALTH 3"),
	detail(
		itm("Frogs/Crickets"),
		"Also set skew for TOTS while waiting"),
	Chest("Ancient Core"),
	ShrineBlessing("Daag Chokah"),
	split("-"),
	Warp("Keo Ruug"),
	split("-"),
	Shrine("Keo Ruug"),
	split("-"),
	detail(
		Icon("tots", "Trial of the Sword"),
		"Grab Silent Princesses if they respawn after TOTS"),
	split("-"),

	step(wb(cps)(".E start test of wood")),
	ShrineBlessing("Maag Halan"),
	split("-"),

	step(wb(cps)("<W TS")),
	npc("Metal Quest Guy"),
	wb(cps)("<W Turn to lake"),
	Equipment("Rusty Shield", "Keep for korok"),
	ShrineBlessing("Kuhn Sidajj"),
	split("-"),
];