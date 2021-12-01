
import { Chest, ChestSpecial, detail, Equipment, image, indent, Korok, MakeTOD, Section, Shrine, Snap, split, step, VariableChange, Warp } from "../create";
import { cps, emy, important, itm, lnk, npc, sm, txt } from "../types";
import Faron1Image from "./Faron1.png";

export const Faron1  = [
	Section("FARON 1"),
	image(Faron1Image),
	step(cps("SW")," + ", cps("SW"), " midairs"),
	Korok("F06", "Lift Rock", "Peak"),
	step(cps("SW"), " SQ WB to rocks"),
	Korok("F09", "Basketball", "2 STS hits"),
	step(cps(".W"), " to tree below"),
	Korok("F08", "Lift Rock (Tree)"),
	step("Fall down. ",cps("E")," to flower"),
	Korok("F12", "Flower Chase"),
	step(cps("W"), " to peak"),
	Korok("F11", "Lift Rock", "Peak"),
	step(cps("<W")," Turn to Cave"),

	"FAROSH FARMING",
	"Need 1F 2C 3S, 30 Horns",
	Snap(emy("Farosh"), "SNAP Elite"),
	detail(
		important("SAVE afterwards"),
		"If you have another torch you don't need to pick up the torch. You can only have 1 torch, otherwise you don't have enough space for the knight's sword later"),

	step(cps("SW"), " to waterfall"),
	Korok("F26", "Block Puzzle"),
	"Drop down",
	ChestSpecial("Phantom Ganon Helm", "Below waterfall in water EQUIP"),
	step(cps("SE")),
	ChestSpecial("Phantom Ganon Pants", "At bottom of statue EQUIP"),
	indent(sm("closest to cliff")),
	step(cps("<<W"), " no turn to top of stable"),
	Equipment("Axe", "Keep for duping"),
	"Drop down",
	Korok("F41", "Bomb Beard"),
	detail(
		txt("Talk to ",npc("Quest Lady"), " twice"),
		"Can pick up a torch if have no torch"),
	step(Chest("Ancient Core", "Skip if have 1 core")),
	Shrine("Shai Utoh"),
	split(),

	detail(
		step(MakeTOD("5am", "Make Morning", "for beetle")),
		"Cook stealth/potion here if you forgot"),
	txt(cps("N"), " to beetle forest"),
	important("EAT STEALTH"),
	VariableChange({beetle: 5}),
	detail(
		itm("Grab 5 Beetles"),
		txt("Example by BingsF: ",lnk("https://discordapp.com/channels/269611402854006785/298175033224724500/911119688963072001"))),
	step(cps("W."), " Turn to bridge"),
	Korok("F24", "Balloon", "east of bridge under leaves"),
	step("Start flower chase"),
	ChestSpecial("Phantom Ganon Armor", "below bridge, no equip"),
	Korok("F23", "Flower Chase"),
	Warp("Kakariko"),
	split(),
];