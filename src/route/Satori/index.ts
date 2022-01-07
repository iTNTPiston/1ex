import { ability, Boss, ChestSpecial, detail, Korok, Section, step, VariableChange } from "../create";
import { cps, fury, gale, itm, txt, v } from "../types";
import { wb } from "../windbomb";
import { KaamYatak } from "./S1KaamYatak";
import { MoggLatan } from "./S2MoggLatan";

export const Satori = [
	Section("SATORI"),
	...KaamYatak,
	...MoggLatan,
];