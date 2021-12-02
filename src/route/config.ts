import { Akkala } from "./Akkala";
import { Eldin1 } from "./Eldin1";
import { Faron1 } from "./Faron1";
import { Gerudo1 } from "./Gerudo1";
import { Gerudo2 } from "./Gerudo2";
import { Hateno1 } from "./Hateno1";
import { Hestu } from "./Hestu";
import { Kakariko1 } from "./Kakariko1";
import { KorokForest } from "./KorokForest";
import { Lake } from "./Lake";
import { Plateau } from "./Plateau";
import { Rito1 } from "./Rito1";
import { RupeePrinting } from "./RupeePrinting";
import { ChangeData } from "./types";
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
	...Akkala,
	...KorokForest,
	"TODO: Castle+Plat 2",
	...Gerudo2,
	...Lake,
];

export const Change: ChangeData[] = [
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