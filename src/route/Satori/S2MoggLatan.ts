import { step, Korok, Discover, ability, Boss, Shrine, split, ChestSpecial, detail, VariableChange, MakeTOD } from "../create";
import { cps, fury, gale, itm, txt, v } from "../types";
import { wb } from "../windbomb";

export const MoggLatan = [
	step(MakeTOD("9pm", "Make Night")),
	step(wb(cps)("S>> Turn")),
	Korok("C60", "Block Puzzle"),
	step(wb(cps)("<<N Turn")),
	Korok("C57", "Acorn", "In tree"),
	"Run to bridge",
	Discover("Gleeok Bridge"),
	step(wb(cps)("N")),
	Korok("C52", "Lift Rock", "In well"),
	step(wb(cps)("N Turn right")),
	Korok("C37", "Block Puzzle"),
	step(wb(cps)("E>")),
	Discover("Ancient Tree Stump"),
	Korok("C47", "Lily Pads", "Cryo"),
	step(wb(cps)("<W Turn")),
	Korok("R58", "Lift Rock (Tree)"),
	step(wb(cps)("W + W")),
	Korok("R57", "Acorn", "In tree"),
	step(wb(cps)("W")),
	Korok("R56", "Acorn", "In tree"),
	step(wb(cps)("S> Turn")),
	Korok("R68", "Balloon", "Pre Bullet Time 5"),
	Korok("R69", "Acorn in Log", "Shoot from far"),
	step(wb(cps)("S Turn")),
	Korok("R78", "Offer Apple"),
	step(wb(cps)("W")),
	Korok("R77", "Acorn", "Hanging from tree"),
	step(wb(cps)("W")),
	Korok("R75", "Acorn", "Shoot midair"),
	Korok("R76", "Lift Rock (Tree)"),
	ability(step(gale(), " + ", wb(cps)("<E")), {gale: 1}),
	Korok("G14", "Balloon"),
	step(wb(cps)("N> Turn + N>")),
	Korok("R70", "Lift Rock Blocked", "Under Boulder"),
	ability(Boss("Stalnox", txt("GEB + ", fury())), {fury: 3}),
	"Run to race start",
	Korok("R62", "Race", "Cardinal"),
	step(wb(cps)("W")),
	Korok("R60", "Lift Rock Blocked", "Under leaves"),
	Shrine("Mogg Latan"),
	split("-"),

	step(wb(cps)("N")),
	Korok("R52", "Lift Rock (Tree)"),
	ChestSpecial("Ancient Bridle"),
	VariableChange({silentPrincess: 4}),
	detail(
		itm("4 Silent Princesses"),
		txt(v("silentPrincess"), "/19")),
	"Run to flower",
	Korok("R61", "Flower Chase"),
	step(wb(cps)("NE")),
	Korok("R53", "Lift Rock Blocked", "Under rubble"),
	step("SQ SEish to tree"),
	Korok("R54", "Confetti", "Top of tree"),
	"Glide down",
	Korok("R55", "Lift Rock", "In tree stump"),

	step(wb(cps)("SW + <S midair")),
	Korok("R73", "Boulder Golf", "Stasis + shoot"),
	step(wb(cps)("W SQ")),
	VariableChange({honey: 2}),
	detail(
		itm("2 Honey"),
		txt(v("honey"), "/16")),
	itm("Backup Octoballoon"),
	step("Run + SQ"),
	Korok("R67", "Basketball"),
	"Run",
	Korok("R66", "Tree Stump", "Magnesis 2"),
	"Run",
	Korok("R65", "Flower Count"),
	Korok("R64", "Lift Rock Blocked", "Under rubble"),
	step(wb(cps)("N> Turn")),
	Korok("R51", "Rock Circle"),
	step(wb(cps)("SW")),
	Korok("R63", "Lift Rock Blocked", "Under leaves"),
	step(wb(cps)("S>")),
	Korok("R72", "Lift Rock Blocked", "Under leaves"),
	step(wb(cps)("W Turn")),
	Korok("R71", "Lift Rock"),
	step(wb(cps)("N Turn right")),
	Korok("R59", "Lift Rock", "Small island"),
	step(cps("<N")),
	Korok("R50", "Balloon", "In tree")
];