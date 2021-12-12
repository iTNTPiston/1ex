import { step, Korok, Boss, VariableChange, detail, Discover, Shop, Shrine, split, Icon } from "../create";
import { cps, fury, important, itm, lcn, npc, rne, txt, v } from "../types";
import { wb } from "../windbomb";

export const MONUMENT = [
	VariableChange({monument: 1}),
	detail(lcn("Monument"), txt(v("monument"), "/10")),
];

export const Ruta = [
	step(wb(cps)(".E SQ")),
	Korok("Z42", "Balloon", "Shoot from above"),
	step(wb(cps)("E + E midair")),
	Korok("Z43", "Block Puzzle"),
	step(wb(cps)("S> Turn")),
	Korok("N06", "Confetti", "Top of tall tree"),
	step(cps("NE")),
	Korok("Z44", "Light Chase"),
	step(wb(cps)("E> Turn")),
	Boss("Blue Hinox", txt("3 Spin Hits SLAM ", fury("3"))),
	important("B ONLY FOR MONUMENT"),
	step(wb(cps)("<N + <N midair")),
	...MONUMENT,
	step(cps("W.")),
	...MONUMENT,
	"Run down",
	Korok("Z33", "Light Chase"),
	itm("3 Lotus Seeds"),
	step(cps("<W")),
	...MONUMENT,
	step("Cryo block ", cps("N")),
	Discover("Luto's Crossing"),
	Korok("Z32", "Rock Circle", "Below bridge"),
	itm("2 Lotus Seeds"),
	step(wb(cps)(".N DT")),
	...MONUMENT,
	step(cps("E>")),
	...MONUMENT,
	step(cps("N"), important(" LOOK UP")),
	Korok("Z25", "Lift Rock", "On ledge"),
	step(wb(cps)("N High")),
	Korok("Z16", "Confetti", "Flower thing above palace"),
	txt("Talk to ", npc("King")),
	Shop("All Arrows"),
	itm("4 Lotus Seeds"),
	step(Shrine("Ne'ez Yohma")),
	split("-"),
    
	detail(
		"Fish Drama",
		"Fish Drama + Ruta Entry same as AD. If you miss the prefire first shot you can still one cycle with the stamina you have."),
	Icon("ruta-memory", "Mipha Memory"),
	split("-"),
    
	"2 WB to Sidon",
	Icon("ruta-enter", "Enter Ruta"),
	split("-"),

	detail(
		important("EQUIP PHANTOM 3"),
		"Ruta same as AD. Make sure gale is emptied or unused at the end so the routing stays consistent. No snap waterblight to make one cycle easier"),
	important("EQUIP ", rne("CYONIS")),
	"NO SNAP",
	Icon("ruta-done", "Waterblight 1", "7 BA Headshots (8 safe)"),
	split("-"),
];