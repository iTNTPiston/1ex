import { step, ShrineBlessing, split, Korok, ability, Boss, Tower, Shrine, VariableChange, detail, Warp } from "../create";
import { cps, gale, fury, v, itm, txt } from "../types";
import { wb } from "../windbomb";

export const DunbaTaag = [
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
	Tower("Ridgeland Tower", "71.87%"),
	split("{6 | 0", v("srn"), " SRN | ", v("krk"), " KRK}"),

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
	cps(".S"),
	Shrine("Toh Yahsa"),
	split("-"),

	step(wb(cps)("S DEFUSE")),
	Korok("R14", "Light Chase"),
	step(wb(cps)("N + NW + N")),
	Korok("R04", "Rock Circle", "In Canyon"),
	ability(step(gale(), " + ", cps("W")), {gale: 1}),
	Korok("H73", "Race", cps("<N")),
	VariableChange({rushroom: 1}),
	detail(
		itm("Rushroom"),
		txt(v("rushroom"), "/55")),
	Shrine("Dunba Taag"),
	split("-"),
	Warp("Vah Rudania"),
	split("-"),
];