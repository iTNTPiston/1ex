import { step, Korok, Chest, Boss, VariableChange, detail, MakeTOD, Discover, split, ShrineDoubleSword, ability } from "../create";
import { cps, emy, fury, lcn, txt, v } from "../types";
import { wb } from "../windbomb";

export const SaasKosah = [
	step(wb(cps)("E>")),
	Korok("X03", "Lift Rock Blocked", "Under rubble"),
	"Glide",
	Chest("Naydra Scale"),
	"Run to lily pads",
	Korok("X02", "Lily Pads", "No Drown"),
	"Run",
	Chest("Dinraal Scale"),
	step(wb(cps)("N> Turn")),
	Korok("K30", "Lift Rock", "Ledge"),
	step(wb(cps)(".S Turn")),
	"Shield Surf in East Passage",
	Korok("X11", "Ice Block"),
	ability(Boss("Rare Talus", fury()), {fury: 3}),
	"Glide up bomb eye",
	Chest("Farosh Fang"),
	VariableChange({tail: 5}),
	detail(
		txt("5 ", emy("Lizalfos"), " in Library"),
		txt("Grab bow until full. Need 1 empty weapon slot for OHO. Tail ", v("tail"), "/45")),
	Discover("King's Study"),
	txt("Run to ", lcn("Docks")),
	MakeTOD("9pm", "Make Night if <9PM", "For Blood Moon"),
	ShrineDoubleSword("Saas Ko'sah"),
	split("-"),
];