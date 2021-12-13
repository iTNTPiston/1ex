import { Section, Equipment, step, Shrine, split, detail,  Tower, Korok, Icon, image } from "../create";
import {  itm } from "../types";
import PlateauImage from "./Plateau.png";

export const Plateau = [
	Section("PLATEAU 1"),
	image(PlateauImage),
	"SOR Clip, no TOD",
	itm("6 Peppers"),
	detail(
		Equipment("Potlid + Spear", "Spear for FDC"),
		"Ideally keep this potlid for Thunderblight, or you can get another one in kakariko if you break this one"),

	"TOT Clip",
	detail(Equipment("Bow + Arrow"), "Similar to granatus, you don't want to break any bows optimally. However it matters less since we have early RGC"),
	"BLSS to bombs",
	detail(Shrine("Ja Baij"),"Either aim more right for safe WB or do gamer"),
	split("-"),

	"BLSS to mag",
	Shrine("Oman Au"),
	split("-"),

	"WB to tower",
	Tower("Great Plateau Tower"),
	split("-"),

	step("BLSS to old man's hut"),
	Korok("P18", "Confetti", "On top of hut"),
	step(itm("Baked Apple")),
	Equipment("Torch"),
	step("WB to stasis"),
	detail(Equipment("Hammer", "Switch to hammer"), "Keep the spear to get a sneakstrike in castle later"),
	Shrine("Owa Daim"),
	split("-"),

	step("Boulder launch use ", itm("hammer")),
	step("BTB to cryo"),
	step(Shrine("Keh Namut")),

	"BLSS to ToT",
	Icon("king", "Plateau"),
	split("-")
];