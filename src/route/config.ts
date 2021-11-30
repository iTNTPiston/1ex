import { Eldin1 } from "./Eldin1";
import { Faron1 } from "./Faron1";
import { Gerudo1 } from "./Gerudo1";
import { Hateno1 } from "./Hateno1";
import { Hestu } from "./Hestu";
import { Kakariko1 } from "./Kakariko1";
import { Lake } from "./Lake";
import { Plateau } from "./Plateau";
import { Rito1 } from "./Rito1";
import { RupeePrinting } from "./RupeePrinting";
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

	...Lake,
];