import { Section } from "../create";
import { DaqoTah } from "./G2.1DaqoTah";
import { TakamaShiri } from "./G2.2TakamaShiri";
import { GerudoTown2 } from "./G2.3GerudoTown";
import { KayNoh } from "./G2.4KayNoh";
import { KeiveTala } from "./G2.5KeiveTala";
import { FuryPlus } from "./G2.6FuryPlus";
import { DilaMaag } from "./G2.7DilaMaag";
import { SumaSahma } from "./G2.8SumaSahma";
import { IshtoSoh } from "./G2.9IshtoSoh";

export const Gerudo2 = [
	Section("GERUDO 2"),
	...DaqoTah,
	...TakamaShiri,
	...GerudoTown2,
	...KayNoh,
	...KeiveTala,
	...FuryPlus,
	...DilaMaag,
	...SumaSahma,
	...IshtoSoh,
];