import { Boss, Cook, detail, Korok, MakeTOD, Shrine, split, step } from "../create";
import { cps, fury, important, txt } from "../types";
import { wb } from "../windbomb";

export const ZunaKai = [
	step(MakeTOD("9pm", "Make Night")),
	Cook("Speed/Hearty"),
	wb(cps)(".E Turn"),
	Boss("Black Hinox", txt(fury("1-3"), " + 1 GEB shot")),
	detail(
		important("EQUIP STEALTH 3"),
		"Phantom ganon set makes stal enemy not attack you"),
	step(wb(cps)("<E Turn")),
	Korok("A01", "Lift Rock (Tree)"),
	step(wb(cps)("E> Turn")),
	Korok("A03", "Lift Rock Blocked", "Under Boulder 1 STS"),
	step(wb(cps)("NE to camp")),
	"GG rock",
	Korok("A02", "Rock Circle"),
	step(wb(cps)("S Turn to shrine")),
	Shrine("Zuna Kai"),
	split(),
];