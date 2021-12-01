import { image, Section } from "../create";
import { KuhTakkar } from "./G1.1KuhTakkar";
import { GerudoTower } from "./G1.2GerudoTower";
import { GerudoTown } from "./G1.3GerudoTown";
import { Hideout } from "./G1.4Hideout";
import { Naboris } from "./G1.5Naboris";
import { KemaZoos } from "./G1.6KemaZoos";

import Gerudo1Image1 from "./Gerudo1-1.png";
import Gerudo1Image2 from "./Gerudo1-2.png";

export const Gerudo1 = [
	Section("GERUDO 1"),
	image(Gerudo1Image1),
	...KuhTakkar,
	...GerudoTower,
	...GerudoTown,
	...Hideout,
	...Naboris,
	image(Gerudo1Image2),
	...KemaZoos,
];