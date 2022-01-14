import { step, ShrineBlessing, split, Korok, ability, Boss, Tower, Shrine } from "../create";
import { cps, gale, fury, important} from "../types";
import { wb } from "../windbomb";

export const TohYahsa = [
	step(wb(cps)("W Turn")),
	"Ragdoll bomb in",
	ShrineBlessing("Maag No'rah"),
	split("-"),

	step(wb(cps)("<N + W")),
	ability(Boss("Luminous Talus", fury()), {fury: 3}),
	Korok("R02", "Lift Rock"),
	step(wb(cps)("<S Turn + <S")),
	Korok("R06", "Confetti", "Top of bare tree"),
	step(wb(cps)("E>")),
	Korok("R09", "Race", "Run"),
	step(wb(cps)("<S DT")),
	Tower("Ridgeland Tower"),
	split("-"),

	step(wb(cps)("W Turn")),
	Korok("R15", "Rock Circle", "3 on mushroom tree"),
	important("EQUIP ANCIENT AXE"),
	step(wb(cps)("<S Turn")),
	ability(Korok("R18", "Race", gale()),{gale: 1}),
	step(wb(cps)("<W Turn")),
	"Start Flower Chase",
	Korok("R24", "Lily Pads", "No Drown"),
	Korok("R23", "Flower Chase"),
	step(wb(cps)("NW")),
	Korok("R14", "Light Chase"),
	step(wb(cps)("<<E Turn")),
	"Red Orb",
	"ordinal to orange",
	wb(cps)("W>> Turn"),
	Korok("R08", "Lift Rock Blocked", "Under rubble"),
	wb(cps)("<S Turn"),
	"Green Orb",
	Shrine("Toh Yahsa"),
	split("-"),

];