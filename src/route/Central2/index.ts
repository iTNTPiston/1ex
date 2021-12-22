import { Section } from "../create";
import { CentralTower } from "./C2.1CentralTower";
import { BoshKala } from "./C2.2BoshKala";
import { ReeDahee } from "./C2.3ReeDahee";
import { ShaeKatha } from "./C2.4ShaeKatha";

export const Central2 = [
	Section("CENTRAL 2"),
	...CentralTower,
	...BoshKala,
	...ReeDahee,
	...ShaeKatha,
];