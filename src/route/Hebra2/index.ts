import { Section } from "../create";
import { MozoShenno } from "./H2.2MozoShenno";
import { ToQuomo } from "./H2.1ToQuomo";
import { MakaRah } from "./H2.3MakaRah";

export const Hebra2 = [
	Section("HEBRA 2"),
	...ToQuomo,
	...MozoShenno,
	...MakaRah
];