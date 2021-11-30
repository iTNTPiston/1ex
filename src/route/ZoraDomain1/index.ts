import { Section } from "../create";
import { JitanSami } from "./Z1.1JitanSami";
import { DowNaeh } from "./Z1.2DowNaeh";
import { MezzaLo } from "./Z1.3MezzaLo";
import { Ruta } from "./Z1.4Ruta";

export const ZoraDomain1 = [
	Section("Zora Domain 1"),
	...JitanSami,
	...DowNaeh,
	...MezzaLo,
	...Ruta,
];