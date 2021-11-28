import { Chest, detail, Discover, Equipment, IconGeneric, image, Korok, Section, Shop, split, step, VariableChange, Warp } from "../create";
import { cps, important, itm, npc, rne, txt, v } from "../types";

import HestuImage from "./Hestu.png";

export const Hestu = [
	Section("HESTU"),
	image(step("SQ WB to shop area"), HestuImage),
	Shop("Shops", "Arrows + Carrots"),
	txt("Run, talk to ", npc("Impa")),

	step(important("EQUIP PHANTOM 3")),
	txt(cps("E>"), " no turn"),
	Korok("D06", "Lift Rock", "Ledge"),
	step(cps("SE")," to camp"),
	important("EQUIP PHANTOM 3"),
	detail(
		"SLAM with Royal Claymore",
		"Game should force a load before the slam, so no need to wait for them to load in."),
	Chest("Maracas"),
	step("Glide to tree"),
	Korok("D21", "Confetti", "Top of tree"),
	step(cps("<W"), " to ", npc("Hestu")),
	IconGeneric("hestu", "Hestu 1", 0, -3, "2 Bows (2nd option)"),
	important("EAT SPEED"),
	step(cps(".W"), " Turn to bridge"),
	Korok("D20", "Basketball", "GG a rock down"),
	step(cps("NW")," to island"),
	Korok("D19", "Basketball", "no GG"),
	step(cps("NW")),
	Korok("D18", "Lily Pads", "No Drown"),
	Warp("Kaya Wan", txt("Check ", v("krk"), " Koroks")),
	split(),

	step("Surf down and ", rne("mag"), " chest out"),
	detail(
		"Open chest",
		"Should have exactly 8 weapons if you follow this route: RGC, RC, Hammer, Torch, Hammer, Hammer, Axe, Sword"),
	txt("Talk to ", npc("Guy")),
	Discover("Wetland Stable"),
	IconGeneric("hestu", "Hestu 2", 0, -19, "3 Bows, 2 Weapons"),

	VariableChange({honey: 1}),
	detail(
		step("Food Forest, ", itm("Honey")),
		txt("Honey ", v("honey"), "/16")),
	Korok("Z37", "Lift Rock", "middle of thorns"),
	step(cps("<E")," Turn"),
	Equipment("Wooden Bow"),
	Korok("Z38", "Well"),
	step(cps("SE")),
	Discover("Goponga Village Ruins"),
	step(cps("N")),
	Korok("Z39", "Light Chase"),
	"Start getting lotus",
	Korok("Z40","Acorn", "Hanging from tree"),
	detail(
		itm(">30 Lotus"),
		"RGC cut legs + RC kill guardian if need springs"),
	Warp("Mogg Latan"),
	split(),
];