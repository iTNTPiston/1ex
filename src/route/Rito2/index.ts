import { Section } from "../create";
import { BareedaNaag } from "./R2.2BareedaNaag";
import { VooLota } from "./R2.1VooLota";
import { DunbaTaag } from "./R2.3DunbaTaag";

export const Rito2 = [
	Section("RITO 2"),
	...VooLota,
	...BareedaNaag,
	...DunbaTaag
];