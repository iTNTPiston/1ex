import { image, Section } from "../create";

import CastleImage1 from "./Castle1.png";
import CastleImage2 from "./Castle2.png";

import { DarkBeast } from "./X1DarkBeast";
import { SaasKosah } from "./X2SaasKosah";
import { CastleSecondHalf, ZaltaWa } from "./X3ZaltaWa";
import { SheemDagoze } from "./X4SheemDagoze";
import { MijahRokee } from "./X5MijahRokee";

export const Castle2 = [
	Section("CASTLE"),
	image(CastleImage1),
	...DarkBeast,
	...SaasKosah,
	...CastleSecondHalf,
	image(CastleImage2),
	...ZaltaWa,
	...SheemDagoze,
	...MijahRokee
];