import { image, Section } from "../create";
import { PlateauDLC } from "./P2.1DLC";
import { YaNaga } from "./P2.2YaNaga";

import Plateau2Image from "./Plateau2.png";

export const Plateau2 = [
	Section("PLATEAU 2"),
	image(Plateau2Image),
	...PlateauDLC,
	...YaNaga
];