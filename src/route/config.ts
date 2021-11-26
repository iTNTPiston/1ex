import { Section, txt, step} from "./create";
import {plateau} from "./plateau";

//The Main Route Object
export const mainConfig = [
	...plateau,

	Section("RUPEE PRINTING"),
	step(txt("test")),
];