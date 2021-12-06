import { step, Korok, Boss, Shrine, split, VariableChange, detail, Snap } from "../create";
import { cps, important, itm, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const GerudoTown2 = [
	step(wb(cps)(".S Turn")),
	Korok("W25", "Match Cactus", "Shoot left midair"),
	wb(cps)("<S Midair"),
	important("EQUIP PHANTOM 3"),
	Boss("Molduga", "RGC Spins"),
	"Shoot Torches",
	itm("Molduga Gut"),
	Shrine("Tho Kayu"),
	split(),
    
	step(wb(cps)("<S Turn to molduga")),
	Boss("Molduga", "RGC Spins"),
	step(wb(cps)("W Slight Turn")),
	Korok("W51", "Match Cactus", "Shoot left midair"),
	step(wb(cps)("S midairs to skeleton")),
	Korok("W65", "Confetti", "Top of skeleton"),
	Snap("Gerudo Skeleton", "Quest"),
	VariableChange({silentPrincess: 2}),
	detail(
		itm("2 Silent Princesses"),
		txt(v("silentPrincess"), "/16")),
	npc("Fairy Fountain"),
	detail(
		Shrine("Hawa Koth"),
		"Snap guardian if you haven't"),
	split(),

	step("Give Durian to woman"),
	wb(cps)("<E Turn"),
	Korok("W55", "Lift Rock", "On a rock"),
	step(wb(cps)("S> Turn")),
	Korok("W61", "Match Cactus", "STS (One hand weapon)"),
	step(wb(cps)("E> Turn")),
	"Stun Molduga",
	Korok("W66", "Lift Rock"),
	detail(
		Boss("Molduga", "RGC Spins NO FURY"),
		"Can get flints here if need. Save Furies for Molduking"),
	step(wb(cps)("E Turn")),
	Boss("Molduga", "RGC Spins NO FURY"),
	step(wb(cps)("N")),
	Korok("W57", "Balloon", "On tree in oasis"),
	step(wb(cps)("N midair")),
	Korok("W56", "Lift Rock"),
	step(wb(cps)("N Turn")),
	"Sand Seal Race",
	detail(
		important("EQUIP GERUDO + BOOTS"),
		"Equip Snow Boots so it automatically switches to sand boots"),
	Shrine("Raqa Zunzo"),
	split(),

];