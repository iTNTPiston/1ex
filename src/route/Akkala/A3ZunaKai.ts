import { ability, Boss, Cook, detail, Korok, MakeTOD, ShrineBlessing, split, step } from "../create";
import { cps, fury, important, txt, v } from "../types";
import { wb } from "../windbomb";

export const ZunaKai = [
	step(MakeTOD("9pm", "Make Night", "For Xenoblade")),
	wb(cps)(".E Turn"),
	ability(Boss("Black Hinox", txt(fury(), " + 1 GEB shot")), {fury: 3}),
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
	step(wb(cps)("S SQ to shrine")),
	ShrineBlessing("Zuna Kai"),
	split("{5 | 0", v("srn"), " SRN | ", v("krk"), " KRK}")
];