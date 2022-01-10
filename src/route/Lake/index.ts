import { Section } from "../create";
import { ShoqaTatone } from "./L6ShoqaTatone";
import { LakeTower } from "./L1LakeTower";
import { PumaagNitae } from "./L2PumaagNitae";
import { KaoMakagh } from "./L5KaoMakagh";
import { ReeDahee } from "./L3ReeDahee";
import { ShaeKatha } from "./L4ShaeKatha";

export const Lake = [
	Section("LAKE"),
	...LakeTower,
	...PumaagNitae,
	...ReeDahee,
	...ShaeKatha,
	...KaoMakagh,
	...ShoqaTatone,
];