import { Section } from "../create";
import { RotaOoh } from "./C2.1RotaOoh";
import { JeeNoh } from "./C2.1JeeNoh";
import { BoshKala } from "./C2.2BoshKala";

export const Central2 = [
	Section("CENTRAL 2"),
	...JeeNoh,
	...RotaOoh,
	...BoshKala,
];