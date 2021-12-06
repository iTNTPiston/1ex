import { image, Section } from "../create";
import { PlateauDLC } from "./P2.1DLC";
import { KaamYatak } from "./P2.2KaamYatak";
import { RotaOoh } from "./P2.3RotaOoh";
import { DahKaso } from "./P2.4DahKaso";

import Plateau2Image from "./Plateau2.png";

export const Plateau2 = [
	Section("PLATEAU 2"),
	image(Plateau2Image),
	...PlateauDLC,
	...KaamYatak,
	...RotaOoh,
	...DahKaso
];