import { Section } from "../create";
import { SohKofi } from "./C1.1SohKofi";
import { MirroShaz } from "./C1.2MirroShaz";
import { KatahChuki } from "./C1.3KatahChuki";
import { MonyaToma } from "./C1.4MonyaToma";
import { TohYahsa } from "./C1.5TohYahsa";
import { ShaeLoya } from "./C1.6ShaeLoya";

export const Central1 = [
	Section("CENTRAL 1"),
	...SohKofi,
	...MirroShaz,
	...KatahChuki,
	...MonyaToma,
	...TohYahsa,
	...ShaeLoya
];