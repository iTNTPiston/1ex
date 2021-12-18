import { ability, Boss, Chest, detail, Discover, Equipment, Korok, MakeTOD, ShrineDoubleSword, ShrineSword, split, step } from "../create";
import { cps, fury, gale, npc, txt } from "../types";
import { wb } from "../windbomb";

export const KatahChuki = [
	step(wb(cps)("SW")),
	MakeTOD("12pm", "Make 7AM - 8PM"),
	npc("Balloon Quest"),
	MakeTOD("9pm", "Make Night"),
	step(wb(cps)("W Turn")),
	Discover("Rauru Settlement Ruins"),
	wb(cps)("S + <S"),
	ability(Boss("Luminous Talus", fury()),{fury: 3}),
	ability(step(gale(), " + ", cps("S")), {gale: 1}),
	"Check 2 Slots",
	detail(
		Equipment("Guardian Axe++"),
		"Blizzard rod, RGC 1 hit, stasis+ RGC 11 hits"),
	Chest("Frostspear"),
	ShrineDoubleSword("Namika Ozz"),
	split("-"),

	step(wb(cps)("W DEFUSE")),
	Korok("C09", "Confetti", "Top of tree"),
	step(wb(cps)("SW")),
	Korok("C11", "Lift Rock", "Inside hollow tree"),
	step(wb(cps)("E>")),
	Korok("C12", "Lift Rock", "In tree stump on peak"),
	step(wb(cps)("<W Turn")),
	Korok("C19", "Balloon", "Pinwheel on hollow tree"),
	step(wb(cps)("<W Turn")),
	Discover("Orsedd Bridge"),
	Korok("C23", "Acorn hanging"),
	step(wb(cps)("NW")),
	Korok("C18", "Light Chase"),
	step(cps("W>")),
	Korok("C10", "Basketball", "Cryo"),
	step(wb(cps)("<<E")),
	Korok("C06", "Lily Pads", "No Drown"),
	step(wb(cps)("N> Turn")),
	Korok("C02", "Block Puzzle"),
	step(wb(cps)("W")),
	Discover("Helmhead Bridge"),
	step(wb(cps)("S> Turn")),
	Korok("C05", "Acorn", "In tree"),
	ability(Boss("Stalnox", txt("GEB + ", fury())),{fury: 3}),
	"Surf down",
	Korok("C04", "Lift Rock", "In fountain"),
	step(wb(cps)("S> Turn")),
	Korok("C17", "Lift Rock", "Under leaves"),
	step(wb(cps)("SW super")),
	Korok("C27", "Race", "Start on wall SQ DEFUSE"),
	step(wb(cps)("SW super")),
	Korok("C31", "Lift Rock", "On wall"),
	step(wb(cps)("NW")),
	ShrineSword("Katah Chuki"),
	split("-"),
];