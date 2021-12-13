import { Akkala } from "./Akkala";
import { Castle } from "./Castle";
import { ability } from "./create";
import { Eldin1 } from "./Eldin1";
import { Eldin2 } from "./Eldin2";
import { Faron1 } from "./Faron1";
import { Gerudo1 } from "./Gerudo1";
import { Gerudo2 } from "./Gerudo2";
import { Hateno1 } from "./Hateno1";
import { Hestu } from "./Hestu";
import { Kakariko1 } from "./Kakariko1";
import { KorokForest } from "./KorokForest";
import { Lake } from "./Lake";
import { Plateau } from "./Plateau";
import { Plateau2 } from "./Plateau2";
import { Rito1 } from "./Rito1";
import { RupeePrinting } from "./RupeePrinting";
import { ChangeData, fury } from "./types";
import { ZoraDomain1 } from "./ZoraDomain1";

//The Main Route Object
export const MainRoute = [
	...Plateau,
	...RupeePrinting,
	...Rito1,
	...Kakariko1,
	...Hateno1,
	...Faron1,
	...Hestu,
	...Gerudo1,
	...ZoraDomain1,
	...Eldin1,
	...KorokForest,
	...Castle,
	...Plateau2,
	...Gerudo2,
	...Lake,
	"TODO...",
	ability(fury(), {fury:2}),
	...Eldin2,
	"TODO...",
	...Akkala,
];

export const Change: ChangeData[] = [
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