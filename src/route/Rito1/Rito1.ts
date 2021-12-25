import { Chest, Cook, detail, Equipment, Icon, image, indent, Korok, MakeTOD, Section, Shop, Shrine, split, step, Warp } from "../create";
import { cps, emy, important, itm, lcn, npc, sm, txt } from "../types";
import RitoImage from "./Rito1-2.png";

export const Rito1 = [
	Section("RITO 1"),
	image(RitoImage),
	step("BLSS to Rito"),
	detail(
		important("UNEQUIP PHANTOM"),
		"If you have full phantom/phantom ganon set equipped, you won't be able to buy in shops. This is true for all shops."),
	step("Talk to ",npc("Chief")," + ",npc("Wife")),
	Icon("medoh-memory", "Revali Memory"),
	split("-"),
    
	detail(
		Shop("Drop down to shop", "Buy everything"),
		"Keep 10 Gears, 5 Cores (6 if you missed moblin guts), 15 springs and 4 screws (3 if you have another monster part)"),
	step(cps("<N"), " TS to ",lcn("Flight Range")),
	Equipment("Arrows + Swallow Bow"),
	detail(
		Cook("Cold + Hearty", "Keep 1 durian"),
		"3 sunshroom for cold protection, or 2 shroom + 2 peppers"),
	indent(sm("Also keep 3-4 sunshrooms")),
	MakeTOD("5am", "Make Morning", "For darners"),
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
		indent("3 BA each phase"),
		"Glide toward center before shooting so he doesn't warp in phase 2. If you are too close you can shoot 4 normal arrows."),
	Icon("medoh-done", "Windblight"),
	split("-"),
	"Drop Traveller Bow",
	step("Get 2 ",itm("Cold Darners")),
	Equipment("Great Eagle Bow", "Finish quest"),
	txt("Backup ",itm("darner"), " on bridge"),
	detail(
		step(Chest("Ancient Core", "Skip if 2 Cores")),
		"2-5/3 Cores"),
	Shrine("Akh Va'quot"),
	split("-"),

	step(cps("<W")," Turn to ",npc("Voo Lota Girl")),
	step(cps("E"), " TS to ",lcn("Rito Stable")),
	Shop("Beedle","Arrow, Fireflies, 1 Darner"),
	itm("Ancient Arrow"),
	itm("10 Berries"),
	detail(
		"Farm wood with RC",
		"If break, use Lynel Sword. No need to pick up axe. Should have: RGC, Torch, Lynel"),
	txt("Get ",itm("Balloon")," from ",emy("Octorok")),
	txt("Get ",itm("Voltfin")," from ",emy("Octorok")),
	"Reload and farm wood again",
	step(cps("<S"), " No Turn"),
	Korok("T19", "Lily Pads", "No Drown"),
	step(Warp("Tower")),
	split("-"),
];

