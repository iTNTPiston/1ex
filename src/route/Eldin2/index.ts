import { Section } from "../create";
import { SatoKoda } from "./E2.1SatoKoda";
import { RinuHonika } from "./E2.2RinuHonika";
import { KamiaOmuna } from "./E2.3KamiaOmuna";

export const Eldin2 = [
	Section("ELDIN 2"),
	...SatoKoda,
	...RinuHonika,
	...KamiaOmuna,
];