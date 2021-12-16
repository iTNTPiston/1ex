import { step, Korok, ability, Boss, Discover, ShrineDLC, Shrine, split } from "../create";
import { cps, fury } from "../types";
import { wb } from "../windbomb";

export const NoeRajee = [
	step(wb(cps)("N + <N midair")),
	Korok("H69", "Acorn in Log"),
	step(wb(cps)("W + W")),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(wb(cps)("N> Turn")),
	Korok("H65", "Confetti", "Top of tree (island)"),
	step(wb(cps)("<W")),
	"Land place cryo block",
	Korok("H66", "Lily Pads", "No Drown"),
	step(wb(cps)("N Turn")),
	Korok("T03", "Lily Pads", "Drown"),
	step(wb(cps)("W Turn")),
	Korok("T11", "Lift Rock (Tree)", "Big tree"),
	step(wb(cps)("<<N")),
	Korok("T05", "Lift Rock"),
	step(wb(cps)("NW")),
	Discover("Hebra Traihead Lodge"),
	step(wb(cps)("<W Turn")),
	Korok("T04", "Well"),
	step(wb(cps)("N.")),
	Shrine("Sha Warvo"),
	split("-"),

	step(wb(cps)("N")),
	"Activate Noe Rajee",
	ShrineDLC("Noe Rajee"),
	split("-"),
];