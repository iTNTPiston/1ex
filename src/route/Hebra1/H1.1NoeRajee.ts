import { step, Korok, ability, Boss, Discover, ShrineDLC, Shrine, split, detail } from "../create";
import { cps, fury, important, itm, npc } from "../types";
import { wb } from "../windbomb";

export const NoeRajee = [
	step(wb(cps)("N + N midairs")),
	Korok("H67", "Well"),
	"Surf to flower during CS",
	Korok("H70", "Flower Chase"),
	step(wb(cps)("W")),
	Korok("H69", "Acorn in Log", "Midair"),
	step(wb(cps)("W midair")),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(wb(cps)("N> Turn")),
	Korok("H65", "Confetti", "Top of tree (island)"),
	step(wb(cps)("<W")),
	"Land place cryo block",
	Korok("H66", "Lily Pads", "No Drown"),
	step(wb(cps)("N Turn")),
	Korok("T03", "Lily Pads", "No Drown"),
	step(wb(cps)("SW + SW")),
	Korok("T11", "Lift Rock (Tree)", "Big tree"),
	step("SQ to stable"),
	npc("Goron Spice Guy"),
	itm("Farm wood"),
	itm("Reload farm again"),
	detail(
		important("CHECK WOOD COUNT"),
		"67+ should be safe, 60+ you want to cut some more trees"),
	step(wb(cps)("W> super")),
	detail(
		npc("Little Bird Salmon"),
		"Cut some trees INWARD as you wait for her to load in"),
	step(wb(cps)("N. Turn")),
	Korok("T05", "Lift Rock"),
	step(wb(cps)("NW")),
	Discover("Hebra Trailhead Lodge"),
	step(wb(cps)("<W Turn")),
	Korok("T04", "Well"),
	step(wb(cps)("N")),
	Shrine("Sha Warvo"),
	split("-"),

	step(wb(cps)("N")),
	"Activate Noe Rajee",
	ShrineDLC("Noe Rajee"),
	split("-"),
];