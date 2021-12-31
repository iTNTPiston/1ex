
import { ChestSpecial, detail, Discover, Equipment, image, indent, Korok, MakeTOD, Section, Shrine, Snap, split, step, VariableChange, Warp } from "../create";
import { cps, emy, important, itm, lnk, npc, sm, txt } from "../types";
import { wb } from "../windbomb";
import Faron1Image from "./Faron1.png";

export const Faron1  = [
	Section("FARON 1"),
	image(Faron1Image),
	step(wb(cps)("<W TS + <W midair")),
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

	detail(
		"FAROSH FARMING",
		"If a chuchu attacks your campfire, make sure to pick up the torch first or it will clip through the ground"),
	"Need 1F 2C 3S, 25 Horns",
	Snap(emy("Farosh"), "SNAP Elite"),
	detail(
		important("SAVE afterwards"),
		"No need to pick up torch. Inventory: RGC, Lynel, Torch, Hammer, Axe (later)"),
	step(wb(cps)("S>> Turn")),
	Korok("F26", "Block Puzzle", "Middle of waterfall"),
	"Drop down",
	ChestSpecial("Phantom Ganon Helm", "Below waterfall in water EQUIP"),
	step(cps("SE")),
	ChestSpecial("Phantom Ganon Pants", "At bottom of statue EQUIP"),
	indent(sm("closest to cliff")),
	Korok("F35", "Luminous Stone", "Eye of statue"),
	step(cps("<<W"), " no turn to top of stable"),
	Equipment("Axe", "Keep for duping"),
	"Drop down",
	Korok("F41", "Bomb Beard"),
	txt("Talk to ",npc("Quest Lady"), " twice"),
	detail(
		step(MakeTOD("5am", "Make Morning", "for beetle & sasa kai")),
		"Cook stealth/potion here if you forgot. If here is too early for you make it morning after shrine"),
	itm("3 Bananas"),
	Shrine("Shai Utoh"),
	split("-"),


	txt(cps("N"), " to beetle forest"),
	important("EAT STEALTH"),
	VariableChange({beetle: 5}),
	detail(
		itm("Grab 5 Beetles"),
		txt("Example by BingsF: ",lnk("https://discordapp.com/channels/269611402854006785/298175033224724500/911119688963072001"))),
	step(cps("W."), " Turn to bridge"),
	Discover("Sarjon Bridge"),
	Korok("F24", "Balloon", "Shoot from bridge"),
	step("Start flower chase"),
	ChestSpecial("Phantom Ganon Armor", "below bridge, no equip"),
	Korok("F23", "Flower Chase"),

];