import { step, Korok, Boss, Shrine, split, VariableChange, detail, Snap, ShrineBlessing, ability, Shop } from "../create";
import { cps, gale, important, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const GerudoTown2 = [
	step(wb(cps)("<S Turn")),
	Korok("W25", "Match Cactus", "Shoot from statue"),
	wb(cps)("S Turn>"),
	important("EQUIP PHANTOM 3"),
	Boss("Molduga", "RGC Spins"),
	"Shoot Torches",
	itm("Molduga Gut"),
	ShrineBlessing("Tho Kayu"),
	split("-"),
    
	step(wb(cps)("<S Turn to molduga")),
	Boss("Molduga", "RGC Spins"),
	step(wb(cps)("W Slight Turn")),
	Korok("W51", "Match Cactus", "Stasis left"),
	ability(step(gale(), " + ", wb(cps)("S midairs")), {gale: 1}),
	Korok("W65", "Confetti", "Top of skeleton"),
	Snap("Gerudo Skeleton", "Quest"),
	VariableChange({silentPrincess: 2}),
	detail(
		itm("2 Silent Princesses"),
		txt(v("silentPrincess"), "/19")),
	npc("Fairy Fountain"),
	detail(
		Shrine("Hawa Koth"),
		"Snap guardian if you haven't"),
	split("-"),

	step("Give Durian to woman"),
	wb(cps)("<E Turn"),
	Korok("W55", "Lift Rock", "On a rock"),
	step(wb(cps)("S> Turn")),
	Korok("W61", "Match Cactus", "STS (One hand weapon)"),
	step(wb(cps)("SE")),
	"Stun Molduga",
	Korok("W66", "Lift Rock"),
	detail(
		Boss("Molduga", "RGC Spins NO FURY"),
		"Can get flints here if need. Save Furies for Molduking"),
	step(wb(cps)("<E Turn")),
	Boss("Molduga", "RGC Spins NO FURY"),
	step(wb(cps)("N")),
	Korok("W57", "Balloon", "On tree in oasis"),
	step(wb(cps)("N midair")),
	Korok("W56", "Lift Rock"),
	step(wb(cps)("N")),
	"Sand Seal Race",
	detail(
		important("EQUIP GERUDO + BOOTS"),
		"Equip Snow Boots so it automatically switches to sand boots"),
	ShrineBlessing("Raqa Zunzo"),
	split("-"),

	step(wb(cps)("<N High")),
	Korok("W42", "Confetti"),
	step("Drop down"),
	txt("Talk to ", npc("Berry Woman"), " twice"),
	txt("Talk to ", npc("Captain")),
	txt("Talk to ", npc("Molduga Lady <2PM")),
	detail(
		txt("Talk to ", npc("Little Girl")),
		"6AM - 8PM"),
	txt("Talk to ", npc("Flint Lady"), " twice"),
	Shop("All Arrows"),
	txt("Talk to ", npc("Molduga Lady >2PM")),
	txt("Talk to ", npc("Riju (B)")),
	"Run/SQ to secret club 3334",
];