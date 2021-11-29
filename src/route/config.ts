import { Faron1 } from "./Faron1";
import { Gerudo1 } from "./Gerudo1";
import { Hateno1 } from "./Hateno1";
import { Hestu } from "./Hestu";
import { Kakariko1 } from "./Kakariko1";
import { Plateau } from "./Plateau";
import { Rito1 } from "./Rito1";
import { RupeePrinting } from "./RupeePrinting";

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
];