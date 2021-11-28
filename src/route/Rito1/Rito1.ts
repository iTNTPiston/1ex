import { Chest, Cook, detail, Equipment, Icon, image, indent, Korok, Section, Shop, Shrine, split, step, VariableChange, Warp } from "../create";
import { cps, emy, important, itm, lcn, npc, sm, txt, v } from "../types";
import Rito2Image from "./Rito1-2.png";

export const Rito1 = [
	Section("RITO 1"),
	image(step("BLSS + WB to ", itm("durians")), Rito2Image),
	VariableChange({ silentPrincess: 2}),
	detail(
		step(cps("W"), " WB, ", itm("2 Silent Princesses")),
		txt(v("silentPrincess"), "/19")),
	txt("Run to ",lcn("Mogg Latan")),
	Shrine("Mogg Latan"),
	split(),

	step(Korok("R60", "Lift Rock Blocked", "Under leaves")),
	step("BLSS to Rito"),
	detail(
		important("UNEQUIP PHANTOM"),
		"If you have full phantom/phantom ganon set equipped, you won't be able to buy in shops. This is true for all shops."),
	step("Talk to ",npc("Chief")," + ",npc("Wife")),
	Icon("medoh-memory", "Revali Memory"),
	split(),
    
	detail(
		Shop("Drop down to shop", "Buy everything"),
		"No need sunshroom if you have enough already. Keep 10 Gears, 5 Cores (6 if you missed moblin guts), 30 springs and 4 screws (3 if you have another monster part)"),
	step(cps("<N"), " TS to ",lcn("Flight Range")),
	Korok("T02", "Confetti", "(Don't stand on tip)"),
	Equipment("Arrows + Swallow Bow"),
	detail(
		Cook("Cold + Hearty", "Keep 1 durian"),
		"2 Trouts or 3 sunshroom for cold protection, or 2 shroom + 2 peppers"),
	indent(sm("Also keep 3-4 sunshrooms")),
	Icon("medoh-enter", "Enter Medoh"),
	split(),

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
	split(),
	important("UNEQUIP PHANTOM"),
	step("Get 2 ",itm("Cold Darners")),
	Equipment("Great Eagle Bow", "Finish quest"),
	txt("Backup ",itm("darner"), " on bridge"),
	detail(
		step(Chest("Ancient Core", "Skip if 2 Cores")),
		"2-5/3 Cores"),
	Shrine("Akh Va'quot"),
	split(),

	step(cps("<W")," Turn to ",npc("Voo Lota Girl")),
	step(cps("E"), " TS to ",lcn("Rito Stable")),
	itm("10 Berries"),
	detail(
		"Farm wood with RC",
		"First RC should break, then use second RC. No need to pick up axe. Should have: RGC, RC, Hammer, Torch"),
	Shop("Beedle","Arrow, Fireflies, 1 Darner"),
	txt("Talk Again for ",itm("Ancient Arrow")),
	txt("Get ",itm("Balloon")," from ",emy("Octorok")),
	"Reload and farm wood again",
	step(cps("E>>>"), " No Turn"),
	Korok("T19", "Lily Pads", "No Drown"),
	step(Warp("Keh Namut")),
	split(),
];

