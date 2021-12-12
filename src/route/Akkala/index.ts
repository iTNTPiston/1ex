import { image, Section } from "../create";
import { KetohWawai } from "./A1KetohWawai";
import { Dinraal, GoraeTorr } from "./A2GoraeTorr";
import { ZunaKai } from "./A3ZunaKai";
import { TuKaloh } from "./A4TuKaloh";
import { TutsuwaNima } from "./A5TutsuwaNima";
import { TarryTown2, Rudania } from "./A6Rudania";

import Akkala1Image from "./Akkala1.png";
import Akkala2Image from "./Akkala2.png";
import RudaniaImage from "./Rudania.png";

export const Akkala = [
	Section("AKKALA"),
	image(Akkala1Image),
	...KetohWawai,
	...Dinraal,
	image(Akkala2Image),
	...GoraeTorr,
	...ZunaKai,
	...TuKaloh,
	...TutsuwaNima,
	...TarryTown2,
	image(RudaniaImage),
	...Rudania,
];