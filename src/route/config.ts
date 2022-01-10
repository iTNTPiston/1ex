import { Akkala } from "./Akkala";
import { Castle2 } from "./Castle2";
import { Central1 } from "./Central1";
import { Central2 } from "./Central2";
import { Eldin1 } from "./Eldin1";
import { Eldin2 } from "./Eldin2";
import { Faron1 } from "./Faron1";
import { Faron2 } from "./Faron2";
import { Finale } from "./Finale";
import { Gerudo1 } from "./Gerudo1";
import { Gerudo2 } from "./Gerudo2";
import { Gerudo3 } from "./Gerudo3";
import { Hateno1 } from "./Hateno1";
import { Hateno2 } from "./Hateno2";
import { Hebra1 } from "./Hebra1";
import { Hebra2 } from "./Hebra2";
import { Hebra3 } from "./Hebra3";
import { Hestu } from "./Hestu";
import { Kakariko1 } from "./Kakariko1";
import { Kakariko2 } from "./Kakariko2";
import { KorokForest } from "./KorokForest";
import { Lake } from "./Lake";
import { Plateau } from "./Plateau";
import { Plateau2 } from "./Plateau2";
import { Rito1 } from "./Rito1";
import { Rito2 } from "./Rito2";
import { Castle1 } from "./Castle1";
import { Satori } from "./Satori";
import { Tabantha } from "./Tabantha";
import { ChangeData } from "./types";
import { ZoraDomain1 } from "./ZoraDomain1";
import { ZoraDomain2 } from "./ZoraDomain2";

//The Main Route Object
export const MainRoute = [
	...Plateau,
	...Castle1,
	...Rito1,
	...Kakariko1,
	...Hateno1,
	...Faron1,
	...Hestu,
	...Gerudo1,
	...ZoraDomain1,
	...Eldin1,
	...KorokForest,
	...Castle2,
	...Plateau2,
	...Gerudo2,
	...Satori,
	...Tabantha,
	...Hebra1,
	...Eldin2,
	...Akkala,
	...Rito2,
	...ZoraDomain2,
	...Central1,
	...Central2,
	...Lake,
	...Faron2,
	...Kakariko2,
	...Hateno2,
	//eventide,
	...Hebra2,
	...Hebra3,
	...Finale
];

export const Change: ChangeData[] = [
	{
		version: "2.0.1",
		date: "2021-12-25",
		changes: [
			"Fix missing Kuh Takkar"
		]
	},
	{
		version: "2.0.0",
		date: "2021-12-24",
		changes: [
			"Early game optimizations",
			"Reroute Korok Forest to do Oaki first",
			"Move Shae Loya branch to after Rito",
			"Reroute around Gerudo Canyan Pass for fury timing",
			"Swapped branch around Dunba Taag and Shae Loya",
			"Reroute around Lanayru Tower and Mirro Shaz",
		]
	},
	{
		version: "1.4.0",
		date: "2021-12-22",
		changes: [
			"Last quarter optimizations and small fixes"
		]
	},
	{
		version: "1.3.0",
		date: "2021-12-21",
		changes: [
			"Changes to existing sections",
			[
				"Add C81 after P01",
				"Add F35 to Faron 1",
				"Change Tarry Town orders",
				"Moving monument before Dagah Keek to ZD2",
				"Add 2 Silent Princesses to Tabantha Great Fairy",
				"Add H33 to Hebra 2",
				"Other small fixes",
				"Fix korok ids",
			],
			"Add Hebra 3, Central 2, Faron 2, Kakariko 2, Hateno 2, Finale",
		]
	},
	{
		version: "1.2.0",
		date: "2021-12-17",
		changes: [
			"Changes to existing sections",
			[
				"Snap Red Lynel at Lanayru Road"
			],
			"Add Hebra 2, Rito 2, ZD 2, Central 1",
		]
	},
	{
		version: "1.1.0",
		date: "2021-12-16",
		changes: [
			"Changes to existing sections",
			[
				"Move Kema Zoos quest lady to Gerudo 2",
				"Move Gerudo 1 TOD back a bit. Set morning at lizalfos camp",
				"Fix early game weapon routing & duping",
				"Other small fixes"
			],
			"Add Gerudo 3, Satori, Tabantha and Hebra 1",
			"Update Akkala with Fury+ strats"
		]
	},
	{
		version: "1.0.0",
		date: "2021-12-12",
		changes: [
			"Changes to existing sections",
			[
				"Move E21 and Kayra Mah to Eldin 2 for fury+ routing. Move E28 to Eldin 1 (Korok Forest)",
				"Move E15 to Eldin 1",
				"Remove usage of amiibos",
				"Akkala Reroute: Add Castle Lynel",
				"Akkala Reroute: Move Akkala to after Eldin 2",
				"Akkala Reroute: Skip Satori in Rito 1",
				"Akkala Reroute: Move TOD to after plateau 1",
			],
			"Add Gerudo 2 route images",
			"Add Eldin 2",
			"Fix blessing shrine icons"
		]
	},
	{
		version: "0.5.1",
		date: "2021-12-11",
		changes: [
			"Add \"Show only splits\" and \"Download splits\" functionalities",
			"Add various shrine icons"
		]
	},
	{
		version: "0.5.0",
		date: "2021-12-06",
		changes: [
			"Changes to existing sections",
			[
				"Move the 2 block puzzles after Spring of Power to before. Better BM timing (if there is BM)",
				"Use phantom armor for after lizalfos sneakstrike in the beginning of Lake section",
				"Fix directions",
				"Update Lake with Fury+ Strats"
			],
		]
	},
	{
		version: "0.4.0",
		date: "2021-12-06",
		changes: [
			"Changes to existing sections",
			[
				"Add snap Molduking",
				"Add split after Spring of Power memory",
				"Add 2 missed koroks and other minor fixes",
			],
			"Add Castle and Plateau 2 Section",
			"Finish Gerudo 2 Section",
			"Start Lake Section"
		]
	},
	{
		version: "0.3.0",
		date: "2021-12-02",
		changes: [
			"Changes to existing sections",
			[
				"Add RNG Silent Princesses after TOTS"
			],
		]
	},
	{
		version: "0.2.0",
		date: "2021-12-01",
		changes: [
			"Changes to existing sections",
			[
				"Add wood + tails during Kihiro Moh SCW",
				"Cook Fruit Cake in Gerudo 2",
				"Fixed missing A47",
				"Add 10 Ice Arrows in Yunobo Cave",
			],
			"Add Akkala and Gerudo 2 up to fury+",
		]
	},
	{
		version: "0.1.0",
		date: "2021-11-30",
		changes: [
			"Changes to existing sections",
			[
				"Move Taloh Naeg to after Hateno. We don't warp back to taloh naeg to do it anymore",
				"Move Pumpkin to after Hateno. The shrine gives it more time for it to be at the farm",
				"Add D06 after D08",
			],
			"Add Eldin 1 and part of Gerudo 2"
		]
	},
	{
		version: "0.0.1",
		date: "Initial",
		changes: [
			"Initial Version",
			"Incomplete doc with up to Ruta and some of Lake region"
		]
	}
];