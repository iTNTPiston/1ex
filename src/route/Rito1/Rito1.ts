import { Chest, Cook, detail, Equipment, Icon, image, indent, Korok, Section, Shop, Shrine, split, step, Warp } from "../create";
import { cps, emy, important, itm, lcn, npc, txt } from "../types";
import RitoImage from "./Rito1-2.png";

export const Rito1 = [
	Section("RITO 1"),
	image(RitoImage),
	Warp("Keh Namut", "aka Cryonis"),
	split("-"),
	step("BLSS to Rito"),
	step("Talk to ",npc("Chief")," + ",npc("Wife")),
	Icon("medoh-memory", "Revali Memory"),
	split("-"),
    
	detail(
		itm("Cold Darner"),
		"On the way dropping down near the Mozo Shenno quest girl."),

	detail(
		important("UNEQUIP PHANTOM"),
		"If you have full phantom/phantom ganon set equipped, you won't be able to buy in shops if you walk too close to the npc. Drop 5 cores (6 if you didn't pick up lynel part) or 8 shafts if you have core or shaft no gear. If you have gear just sell all the gears"),
	"Drop Items",
	Shop("Shop", "Buy everything"),

	step(cps(".N"), " TS to ",lcn("Flight Range")),
	Korok("T02", "Confetti", "Top of house"),
	Equipment("Arrows + Swallow Bow"),
	detail(
		Cook("Cold + Hearty", "Keep 1 durian"),
		"2 shroom + 2 peppers, and you should have 3 left for quest. If you don't have enough peppers, use 4 sunshrooms. Make morning here if it might be too late for darner spawn. You only need one darner (can grab another in rito 2)"),
	Icon("medoh-enter", "Enter Medoh"),
	split("-"),

	"Chests inside Medoh", 
	detail(
		Chest("Ancient Core", "Skip if 5 cores"),
		"1-5/3 Cores"),
	Chest("10 Ice Arrows", "Break with RC"),
	important("EQUIP ATK 3"),
	emy("Windblight 1"),
	detail(
		indent("2 BA each phase"),
		"Use Lynel Bow"),
	Icon("medoh-done", "Windblight 1"),
	split("-"),
	"Drop Traveller Bow",
	itm("Cold Darner"),
	npc("Flight Pad Lady (BN Quest)"),
	Equipment("Great Eagle Bow", "Finish quest"),
	txt("Backup ",itm("darner"), " on bridge"),
	detail(
		step(Chest("Ancient Core", "Skip if 2 Cores")),
		"2-5/3 Cores"),
	Shrine("Akh Va'quot"),
	split("-"),

	step(cps("W")," Turn to ",npc("Voo Lota Girl")),
	step(cps("E"), " TS to ",lcn("Rito Stable")),
	Shop("Beedle","Arrow, Fireflies, 1 Darner"),
	itm("Ancient Arrow"),
	itm("10 Berries"),
	detail(
		"Farm wood with RC",
		"If break, use Lynel Sword. No need to pick up axe. Should have: RGC, Travller, Tree Branch, Lynel"),
	txt("Get ",itm("Balloon")," from ",emy("Octorok")),
	txt("Get ",itm("Voltfin")," from ",emy("Octorok")),
	"Reload and farm wood again",
	step(cps("<S"), " No Turn"),
	Korok("T19", "Lily Pads", "No Drown"),

];

