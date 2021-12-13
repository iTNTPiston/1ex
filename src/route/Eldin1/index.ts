import { image, Section } from "../create";
import { DagahKeek } from "./E1.1DagahKeek";
import { TahMuhl } from "./E1.2TahMuhl";
import { AkkalaTower } from "./E1.3AkkalaTower";
import { DaHesho } from "./E1.4DaHesho";
import { SahDahaj } from "./E1.5SahDahaj";
import { EldinTower } from "./E1.6EldinTower";
import { Rudania } from "./E1.7Rudania";
import Eldin1Image1 from "./Eldin1-1.png";
import Eldin1Image2 from "./Eldin1-2.png";

export const Eldin1 = [
	Section("ELDIN 1"),
	image(Eldin1Image1),
	...DagahKeek,
	...TahMuhl,
	...AkkalaTower,
	image(Eldin1Image2),
	...DaHesho,
	...SahDahaj,
	...EldinTower,
	...Rudania,
];