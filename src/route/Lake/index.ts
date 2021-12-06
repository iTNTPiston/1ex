import { Section } from "../create";
import { ShoqaTatone } from "./L1.5ShoqaTatone";
import { IshtoSoh } from "./L1.6IshtoSoh";
import { YaNaga } from "./L1YaNaga";
import { LakeTower } from "./L2LakeTower";

export const Lake = [
	Section("LAKE"),
	...YaNaga,
	...LakeTower,
	"TODO: kao makagh,update with fury+ strats",
	
	...ShoqaTatone,
	...IshtoSoh,
];