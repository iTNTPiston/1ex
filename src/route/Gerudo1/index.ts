import { image, Section } from "../create";
import { GerudoTower } from "./G1.1GerudoTower";
import { GerudoTown } from "./G1.2GerudoTown";
import { KuhTakkar } from "./G1.3KuhTakkar";
import { Hideout } from "./G1.4Hideout";
import { Naboris } from "./G1.5Naboris";
import { KemaZoos } from "./G1.6KemaZoos";

import Gerudo1Image1 from "./Gerudo1-1.png";
import Gerudo1Image2 from "./Gerudo1-2.png";

export const Gerudo1 = [
	Section("GERUDO 1"),
	image(Gerudo1Image1),
	...GerudoTower,
	...GerudoTown,
	...KuhTakkar,
	...Hideout,
	...Naboris,
	image(Gerudo1Image2),
	...KemaZoos,
];