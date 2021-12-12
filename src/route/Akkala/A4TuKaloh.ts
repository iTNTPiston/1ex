import { Boss, ChestSpecial, detail, Korok, Shop, ShrineBlessing, Snap, split, step } from "../create";
import { cps, gale, important, lcn, npc, txt } from "../types";
import { wb } from "../windbomb";

export const TuKaloh = [
	detail(
		step("Look Sky East"),
		"Make sure not to reload before getting the chest, or the chest will despawn."),
	"Drop down",
	Snap("Kilton", "SNAP multiple to be safe"),
	txt("Talk to ", npc("Kilton")),
	step(cps("SE")),
	Korok("A05", "Race", gale("2")),
	step(wb(cps)("S no turn")),
	Korok("A10", "Lift Rock Blocked", "Under slab 1 STS"),
	step(wb(cps)("E")),
	Snap("Blupee", "Quest"),
	Korok("A11", "Lift Rock (Tree)"),
	step(wb(cps)("E> Turn")),
	Korok("A12", "Balloon", "Static under hanging cliff"),
	step(wb(cps)("<N midair + N midair")),
	important("EQUIP PHANTOM"),
	"Shoot Arrow below",
	Boss("Black Hinox", "7-8BA / 8-9 NA"),
	Korok("A06", "Lift Rock Blocked", "Under slab 1 STS"),
	step(cps("NW")),
	ChestSpecial("Xenoblade Chest"),
	step(cps("E>>")),
	Korok("A04", "Flower Count"),
	detail(
		step(cps("SE")),
		"For this korok, push the right boulder forward a bit. Place a pin at the hold to align. Stasis Full and shoot with RGB to align. Shoot at 45 degrees. Windbomb over and if the boulder is rolling down, use stasis reset."),
	important("SAVE"),
	Korok("A07", "Boulder Golf"),
	step(cps("SE")),
	Korok("A13", "Lift Rock Blocked", "Under Leaves"),
	step(wb(cps)("E to blue flame")),
	"Smuggle",
	wb(cps)("E to race start"),
	detail(
		Korok("A14", "Race", cps(".E")),
		"Land and hang on cliff to keep smuggle. For the next korok, throw the torch before lifting rock."),
	"Run to guardian pile",
	Korok("A15", "Lift Rock"),
	txt("Walk to ", lcn("Tech Lab"), ". Activate"),
	txt("Talk to ", npc("Robbie"), " (2nd options)"),
	Shop("Ancient Stuff", "Sword, Shield, Arrows"),
	txt("Talk to ", npc("Jerrin"), " (11)"),
	gale("3"),
	Korok("A16", "Confetti"),
	step(wb(cps)("N> TS")),
	ShrineBlessing("Tu Ka'loh"),
	split("-"),
];