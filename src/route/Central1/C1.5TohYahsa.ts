import { step, ShrineBlessing, split, Korok, ability, Boss, Tower, Shrine } from "../create";
import { cps, gale, fury} from "../types";
import { wb } from "../windbomb";

export const TohYahsa = [
	step(wb(cps)("W Turn")),
	"Ragdoll bomb in",
	ShrineBlessing("Maag No'rah"),
	split("-"),

	step(wb(cps)("<N")),
	Korok("R03", "Lift Rock Blocked", "Under rubble cliffside"),
	ability(step(gale()), {gale: 1}),
	ability(Boss("Luminous Talus", fury()), {fury: 3}),
	Korok("R02", "Lift Rock"),
	step(wb(cps)("SE + SE")),
	Korok("R06", "Confetti", "Top of bare tree"),
	step(wb(cps)("E>")),
	Korok("R09", "Race", "Run"),
	step(wb(cps)("S> DT")),
	Tower("Ridgeland Tower"),
	split("-"),

	step(wb(cps)("<W Turn")),
	ability(Korok("R18", "Race", gale()),{gale: 1}),
	step(wb(cps)("W")),
	"Start Flower Chase",
	Korok("R24", "Lily Pads", "No Drown"),
	Korok("R23", "Flower Chase"),
	step(wb(cps)("N")),
	Korok("R15", "Rock Circle", "On mushroom tree"),
	"SQ to red",
	"ordinal to orange",
	cps("NW"),
	Korok("R08", "Lift Rock Blocked", "Under rubble"),
	cps("<S Turn"),
	Korok("R14", "Light Chase"),
	cps("N to green orb"),
	Shrine("Toh Yahsa"),
	split("-"),

];