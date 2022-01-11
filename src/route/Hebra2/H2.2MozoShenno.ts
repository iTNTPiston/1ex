import { ShrineDoubleSword, split, step, Warp } from "../create";
import { cps} from "../types";
import { wb } from "../windbomb";

export const MozoShenno = [
	Warp("Shada Naw"),
	split("-"),
	step(wb(cps)("<W DT")),
	ShrineDoubleSword("Mozo Shenno"),
	split("-"),
];