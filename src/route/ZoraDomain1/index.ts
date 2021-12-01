import { image, Section } from "../create";
import { JitanSami } from "./Z1.1JitanSami";
import { DowNaeh } from "./Z1.2DowNaeh";
import { MezzaLo } from "./Z1.3MezzaLo";
import { Ruta } from "./Z1.4Ruta";

import ZD1Image1 from "./ZoraDomain1-1.png";
import ZD1Image2 from "./ZoraDomain1-2.png";

export const ZoraDomain1 = [
	Section("Zora Domain 1"),
	image(ZD1Image1),
	...JitanSami,
	...DowNaeh,
	image(ZD1Image2),
	...MezzaLo,
	...Ruta,
];