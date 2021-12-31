import { Section } from "../create";
import { CentralTower } from "./X1.1CentralTower";
import { EarlyCastle } from "./X1.2Castle";
import { RupeePrinting } from "./X1.3RupeePrinting";

export const Castle1 = [
	Section("CASTLE 1"),
	...CentralTower,
	...EarlyCastle,
	...RupeePrinting
];