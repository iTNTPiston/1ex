import { ability, Boss, ChestSpecial, Discover, Korok, Memory, Shrine, ShrineSword, split, step } from "../create";
import { cps, fury, txt } from "../types";
import { wb } from "../windbomb";

export const MonyaToma = [
	step(wb(cps)("N")),
	Korok("C26", "Balloon", "In tree"),
	Discover("Water Reservoir"),
	Korok("C22", "Rock Circle"),
	step(wb(cps)("SW")),
	Korok("C25", "Lift Rock"),
	step(wb(cps)("N")),
	Korok("C21", "Rock Circle"),
	"Run N",
	Korok("C20", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("N Turn")),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	step(wb(cps)("SE")),
	Korok("C15", "Lily Pads","Cryo block"),
	step(wb(cps)("<N Turn")),
	ChestSpecial("Tingle Shirt", "N to guardian"),
	Korok("C08", "Offer Shield", "Leave shield"),
	"Run",
	Korok("C03", "Block Puzzle"),
	step(wb(cps)("<<N")),
	Korok("C01", "Lift Rock"),
	step(wb(cps)("W Turn")),
	Korok("R11", "Basketball"),
	step(wb(cps)("<S Turn")),
	Korok("C07", "Acorn Flying"),
	step(wb(cps)("S")),
	Korok("C14", "Lift Rock"),
	"Ragdoll bomb in",
	ShrineSword("Noya Neha"),
	split("-"),

	step(wb(cps)("W")),
	Korok("R19", "Boulder Golf"),
	step(wb(cps)("N>")),
	Korok("R16", "Block Puzzle"),
	step(wb(cps)("N super")),
	Korok("R10", "Flower Chase"),
	step(wb(cps)("N> Turn")),
	Memory("Irch Plain"),
	split("-"),
    
	step(Korok("R07", "Lift Rock (Tree)")),
	step(wb(cps)("E Turn")),
	ability(Boss("Blue Hinox", fury()), {fury: 3}),
	step(wb(cps)("N")),
	Korok("K29", "Acorn in Log"),
	step(wb(cps)("NE")),
	Korok("K27", "Balloon"),
	step("SQ ", cps("E")),
	Korok("K28", "Lift Rock"),
	step(wb(cps)("<N Turn")),
	Boss("Blue Hinox", txt("6 Hits SLAM")),
	step(wb(cps)("<W Turn")),
	Korok("K19", "Acorn in Log"),
	step(wb(cps)("NW midair")),
	Korok("K16", "Acorn in Log"),
	step(cps("S")),
	Korok("K18", "Confetti", "Top of broken hut"),
	step(wb(cps)("<S Turn")),
	Korok("K26", "Balloon", "Pinwheel"),
	step(wb(cps)(".W")),
	Korok("K24", "Light Chase"),
	step(wb(cps)("<W")),
	Shrine("Monya Toma"),
	split("-"),

];