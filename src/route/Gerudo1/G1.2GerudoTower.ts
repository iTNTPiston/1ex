import { Equipment, split, step, Tower } from "../create";
import { cps, gale, itm, txt, v } from "../types";

export const GerudoTower = [
	step(cps("<W"), " TS to yiga front door"),
	"Shoot bomb arrow 3 archers",
	itm("1 Banana"),
	Equipment("Duplex Bow x3"),
	step(gale("1")),
	txt(cps("S"), " + ", cps("<S"), " turn midair"),
	Tower("Gerudo Tower"),
	split("{1 | 0", v("srn"), " SRN | 0", v("krk"), " KRK}"),
];