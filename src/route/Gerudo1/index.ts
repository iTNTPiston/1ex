import { image, Section } from "../create";
import { SasaKai } from "./G1.1SasaKai";
import { GerudoTown } from "./G1.2GerudoTown";
import { KuhTakkar } from "./G1.6KuhTakkar";
import { ShoDantu } from "./G1.3ShoDantu";
import { Hideout } from "./G1.7Hideout";
import { KemaKossasa } from "./G1.4KemaKossasa";
import { KeehaYoog } from "./G1.5KeehaYoog";
import { Naboris } from "./G1.8Naboris";
import { KemaZoos } from "./G1.9KemaZoos";

import Gerudo1Image1 from "./Gerudo1-1.png";
import Gerudo1Image2 from "./Gerudo1-2.png";

export const Gerudo1 = [
	Section("GERUDO 1"),
	...SasaKai,
	...GerudoTown,
	...ShoDantu,
	...KemaKossasa,
	...KeehaYoog,
	...KuhTakkar,
	...Hideout,
	...Naboris,
	...KemaZoos,
];