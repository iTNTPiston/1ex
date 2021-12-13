import { image, Section } from "../create";
import { KemaKossasa } from "./G2.1KemaKossasa";
import { KeehaYoog } from "./G2.2KeehaYoog";
import { TakamaShiri } from "./G2.3TakamaShiri";
import { GerudoTown2 } from "./G2.4GerudoTown";
import { KeiveTala } from "./G2.5KeiveTala";
import { FuryPlus } from "./G2.6FuryPlus";
import { KorshOhu } from "./G2.7KorshOhu";
import { DilaMaag } from "./G2.8DilaMaag";
import { SumaSahma } from "./G2.9SumaSahma";

import Gerudo2Image1 from "./Gerudo2-1.png";
import Gerudo2Image2 from "./Gerudo2-2.png";
import Gerudo2Image3 from "./Gerudo2-3.png";

export const Gerudo2 = [
	Section("GERUDO 2"),
	image(Gerudo2Image1),
	...KemaKossasa,
	...KeehaYoog,
	...TakamaShiri,
	image(Gerudo2Image2),
	...GerudoTown2,
	...KeiveTala,
	...FuryPlus,
	image(Gerudo2Image3),
	...KorshOhu,
	...DilaMaag,
	...SumaSahma,
];