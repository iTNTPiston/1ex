import { Section, Equipment, step, Shrine, split, detail,  Tower, Icon, image } from "../create";
import {  itm } from "../types";
import PlateauImage from "./Plateau.png";

export const Plateau = [
	Section("PLATEAU 1"),
	image(PlateauImage),
	"SOR Clip, no TOD",
	itm("Peppers + Shrooms"),
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
	Equipment("Traveller's Sword"),
	Tower("Great Plateau Tower"),
	split("-"),

	step("BLSS to tree below stasis"),
	detail(
		step("WB to stasis"),
		"No hammer"),
	Shrine("Owa Daim"),
	split("-"),

	step("Ride boulder up"),
	step("BLSS to cryo"),
	step(Shrine("Keh Namut")),
	split("-"),

	detail(
		"BLSS to ToT",
		"OK if you throw the spear away. There is a backup in castle later"),
	Icon("king", "Plateau"),
	split("-")
];