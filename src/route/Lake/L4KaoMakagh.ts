import { step, Korok, Boss, ChestSpecial, Discover, Shrine, split, ability } from "../create";
import { cps, fury, itm, npc, txt } from "../types";
import { wb } from "../windbomb";

export const KaoMakagh = [
	step(Korok("L53", "Tree Stump", "Left next to shrine")),
	"Surf + run to flower",
	Korok("L55", "Flower Chase"),
	step(wb(cps)("<S")),
	Korok("L61", "Lift Rock Blocked", "Under slab (1 STS hit)"),
	"Run",
	Korok("L66", "Basketball", "Cryo block"),
	step(wb(cps)("SE, midair to far pillar")),
	Korok("L72", "Race", wb(cps)("N> Turn")),
	step(wb(cps)("<S Turn")),
	ability(Boss("Blue Hinox", txt("3 Spin Hits SLAM ", fury())), {fury: 1}),
	step(cps("E.")),
	Korok("F38", "Lift Rock"),
	step("Drop down ", wb(cps)(".W midairs")),
	Korok("L79", "Rock Circle", "Spiral second ring"),
	step(cps("SW")),
	Korok("L92", "Block Puzzle"),
	step(wb(cps)("N + N midair peak")),
	Korok("L78", "Lift Rock"),
	"Surf down",
	ChestSpecial("Ancient Saddle"),
	txt(npc("Horse God")),
	step(cps("E")),
	Korok("L77", "Rock Circle"),
	"Drop down",
	Discover("Horse God Bridge"),
	step(wb(cps)("N> Turn. Land+cryo block")),
	Korok("L75", "Lily Pads", "No Drown"),
	step(wb(cps)(".N Turn")),
	ability(txt(fury(), " Kill Bokos"), {fury: 2}),
	txt("Turn in ", npc("Quest")),
	"Take out horse (MAX bond)",
	txt("Put on ", itm("Ancient Saddle")),
	"",
	"HORSE MINIGAMES",
	"",
	step(cps("N")),
	Shrine("Ka'o Makagh"),
	split("-"),
];