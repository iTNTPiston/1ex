import { ability, step, ShrineDLC, split, detail, Boss, Korok } from "../create";
import {  cps, fury } from "../types";
import { wb } from "../windbomb";

export const RinuHonika = [
	detail(
		step("Shield Surf SCW"),
		"DLC shrine model is different so gale is slow. Might want to turn off daruk's protection because of lag. Can also BTB to Sharo Lun which is optimal (like 3 seconds faster), but WB + BLSS is safer"),
	"WB to Tower+BLSS",
	ShrineDLC("Sharo Lun"),
	split("-"),
	step(wb(cps)("<W TS")),
	ability(Boss("Igneo Talus", fury()), {fury: 3}),
	step(cps("E")),
	Korok("E23", "Lift Rock Blocked", "Under rubble"),
	step(cps("W")),
	Korok("E22", "Lift Rock", "On stone above ring"),
	step("Midair activate shrine"),
	ShrineDLC("Rinu Honika"),
	split("-")
];