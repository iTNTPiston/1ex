import { Section } from "../create";
import { KemaKossasa } from "./G2.1KemaKossasa";
import { KeehaYoog } from "./G2.2KeehaYoog";
import { TakamaShiri } from "./G2.3TakamaShiri";
import { GerudoTown2 } from "./G2.4GerudoTown";
import { KeiveTala } from "./G2.5KeiveTala";
import { FuryPlus } from "./G2.6FuryPlus";
import { KorshOhu } from "./G2.8KorshOhu";

export const Gerudo2 = [
	Section("GERUDO 2"),
	...KemaKossasa,
	...KorshOhu,
	...KeehaYoog,
	...TakamaShiri,
	...GerudoTown2,
	...KeiveTala,
	...FuryPlus,
];