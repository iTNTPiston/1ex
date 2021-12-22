import { ability, Boss, Chest, detail, Korok, MakeTOD, Shrine, ShrineBlessing, Snap, split, step, Warp } from "../create";
import { cps, fury, gale, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const Lurelin = [
	step(wb(cps)("S")),
	Korok("F19", "Race", "Swim up"),
	wb(cps)("N midair "),
	Korok("F17", "Well", "(Mag boulder in stone)"),
	step(wb(cps)("E> Turn")),
	Korok("F20", "Match Tree", "Closest"),
	step(wb(cps)("E")),
	Korok("F21", "Offer Apple"),
	"Unequip metal",
	step(wb(cps)("<W Turn")),
	Korok("F29", "Block Puzzle", "Piece in lake, cryo"),
	"Equip metal",
	npc("Kass"),
	MakeTOD("9pm", "Make Night if need"),
	ShrineBlessing("Qukah Nata"),
	split("{7 | ", v("srn"), " SRN | ", v("krk"), " KRK }"),

	step(wb(cps)("E")),
	Korok("F30", "Match Tree", "Closest"),
	step(wb(cps)("SW")),
	ability(Boss("Stalnox", txt("GEB + ", fury())), {fury: 3}),
	ability(step(gale(), " + ", wb(cps)("E midairs")), {gale: 1}),
	npc("Love Quest Guy Twice"),
	npc("Love Quest Lady Twice"),
	step(wb(cps)("S")),
	Korok("F47", "Lift Rock", "Peak"),
	step(wb(cps)("<S Turn")),
	Korok("F57", "Rock Circle", "Heart"),
	step(wb(cps)("E> Turn")),
	"Land on pillar",
	"Cryo middle",
	Chest("Sapphire", "Eastern most chest"),
	step(wb(cps)("NW")),
	Korok("F49", "Rock Circle"),
	step(wb(cps)("E")),
	Korok("F50", "Flower Chase", "Turn around after beach"),
	step(wb(cps)("SE")),
	Korok("F58", "Lily Pads", "Close to beach rocks"),
	step(wb(cps)("NE")),
	Korok("F51", "Lily Pads"),
	step(wb(cps)("E Turn")),
	Korok("F52", "Lift Rock"),
	Snap("Shards", "SNAP Quest"),
	Shrine("Kah Yah"),
	split("-"),
    
	ability(step(gale(), " + ", wb(cps)("W")), {gale: 1}),
	Korok("F37", "Lily Pads", "No Drown"),
	"Run to talus",
	ability(Boss("Stone Talus", txt(fury(), " from top")), {fury: 1}),
	step(wb(cps)("<W Turn")),
	Korok("F45", "Flower Chase", "Top of house"),
	"Drop down south",
	itm("Blueshell Snail"),
	"SQ to leftmost house",
	npc("Talk to Mom Twice"),
	detail(
		npc("Talk to Dad"),
		"In house if rain"),
	Korok("F44", "Apple", "Bomb top of palm tree"),
	detail(
		npc("Old man (2) Talk again"),
		"In house if rain"),
	step(wb(cps)("NE")),
	Korok("F36", "Rock Circle", "STS tree"),
	step(wb(cps)("W>")),
	Shrine("Yah Rin"),
	split("-"),

	step(wb(cps)("W>")),
	Korok("F31", "Lift Rock Blocked", "Under leaves"),
	step(Warp("Hateno Tower", txt("Check ", v("krk"), " Koroks"))),
	split("-"),
];