import { Section } from "../create";
import { KuhTakkar } from "./G1.1KuhTakkar";
import { GerudoTower } from "./G1.2GerudoTower";
import { GerudoTown } from "./G1.3GerudoTown";
import { Hideout } from "./G1.4Hideout";
import { Naboris } from "./G1.5Naboris";
import { KemaZoos } from "./G1.6KemaZoos";

export const Gerudo1 = [
	Section("GERUDO 1"),
	...KuhTakkar,
	...GerudoTower,
	...GerudoTown,
	...Hideout,
	...Naboris,
	...KemaZoos,
];