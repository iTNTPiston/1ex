import { Chest, detail, Discover, Equipment, IconGeneric, image, Korok, Section, Shop, split, step, VariableChange, Warp } from "../create";
import { cps, important, itm, npc, rne, txt, v } from "../types";
import { wb } from "../windbomb";

import HestuImage from "./Hestu.png";

export const Hestu = [
	Section("HESTU"),
	image(HestuImage),
	Warp("Kakariko"),
	split("-"),
	detail(
		step(txt("Talk to ",npc("Pumpkin Man"))),
		"Should be in farm before 5pm. Little hut 5pm-8pm. Running around after 8pm. Shield surf down from shrine"),
	Shop("Shops", "Arrows + Carrots"),
	txt("Run, talk to ", npc("Impa")),

	step(wb(cps)("S> + SE to camp")),
	detail(
		"SLAM with RGC kill camp",
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
	split("-"),

	detail(
		step("Surf down shock fish"),
		"If you didn't have shock arrow from the lynel you can bomb the fish"),
	txt(rne("mag"), " chest out"),
	detail(
		"Open chest",
		"Inventory: Traveller, RGC, Lynel, Hammer, Torch, Axe, Knight"),
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
	detail(
		"Start getting lotus",
		"Make Noon for Sasa Kai here if past 1PM"),
	Korok("Z40","Acorn", "Hanging from tree"),
	itm("30 Lotus"),

];