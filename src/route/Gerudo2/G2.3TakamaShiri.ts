import { ability, Boss, detail, Korok, ShrineDLC, Snap, split, step } from "../create";
import { cps, fury, important, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const TakamaShiri = [
	step(wb(cps)("E + S midair")),
	Korok("G09", "Rock Circle"),
	step(wb(cps)("<W to sword")),
	Snap("Big Sword", "Quest"),
	step(wb(cps)("<S turn")),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(cps("SW")),
	detail(
		Korok("W02", "Offer Banana", "Pick up 1, 8 left"),
		"Pick up banana so your inventory is on banana"),
	"Glide to next one",
	Korok("G25", "Offer Banana", "Pick up 1, 5 left"),
	step("Low SQ along path"),
	Korok("W04", "Offer Banana", "Pick up 1, 3 left"),
	"Run down",
	Korok("W05", "Offer Banana", "Pick up 1, 2 left"),
	"Glide over",
	Korok("W03", "Offer Banana", "No pick up, 1 left"),
	step(wb(cps)("S to pillar")),
	Korok("W06", "Flower Chase"),
	step(wb(cps)("E> Turn")),
	Korok("G33", "Rock Circle"),
	step(cps("SE")),
	important("EQUIP GERUDO"),
	Korok("W29", "Race", "SQ DEFUSE"),
	step(important("EQUIP GERUDO")),
	txt(wb(cps)("S> Turn to"), npc(" Sand Seal Lady")),
	"Ride to shrine",
	ShrineDLC("Takama Shiri"),
	split("{3 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),
];