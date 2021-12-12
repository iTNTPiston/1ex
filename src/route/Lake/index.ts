import { Section } from "../create";
import { ShoqaTatone } from "./L5ShoqaTatone";
import { IshtoSoh } from "./L6IshtoSoh";
import { YaNaga } from "./L1YaNaga";
import { LakeTower } from "./L2LakeTower";
import { PumaagNitae } from "./L3PumaagNitae";
import { KaoMakagh } from "./L4KaoMakagh";

export const Lake = [
	Section("LAKE"),
	...YaNaga,
	...LakeTower,
	...PumaagNitae,
	...KaoMakagh,
	...ShoqaTatone,
	...IshtoSoh,
];