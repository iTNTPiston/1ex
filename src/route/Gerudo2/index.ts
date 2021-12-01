import { Section } from "../create";
import { KemaKossasa } from "./G2.1KemaKossasa";
import { KeehaYoog } from "./G2.2KeehaYoog";
import { TakamaShiri } from "./G2.3TakamaShiri";
import { KorshOhu } from "./G2.8KorshOhu";

export const Gerudo2 = [
	Section("GERUDO 2"),
	...KemaKossasa,
	...KorshOhu,
	...KeehaYoog,
	...TakamaShiri,
];