import { Section } from "../create";
import { KahOkeo } from "./T1KahOkeo";
import { TabanthaTower } from "./T2TabanthaTower";
import { ShiraGomar } from "./T3ShiraGomar";

export const Tabantha = [
	Section("TABANTHA"),
	...KahOkeo,
	...TabanthaTower,
	...ShiraGomar,
];