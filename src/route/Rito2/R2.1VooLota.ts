import { Snap, detail, ability, Icon, split, MakeTOD, step, Korok, Shop, Cook, Shrine, Warp } from "../create";
import { emy, txt, rne, npc, cps, v } from "../types";
import { wb } from "../windbomb";

export const VooLota= [
	Warp("Vah Medoh", txt("Check ", v("krk"), " Koroks")),
	split("-"),
	Snap(emy("Windblight"), "SNAP Elite"),
	detail(
		ability(
			Icon("medoh-plus", "Windblight 2", txt("EQUIP ", rne("STASIS+"))),
			{fury: 3}),
		txt(
			"Phase 1: 2 FURY; stasis 5 duplex BA headshot; ",
			"Phase 2: FURY; SNAP; 3 falcon head; 6 falcon head; stasis+ duplex to death")
	),
	split("-"),

	step("Drop down"),
	Korok("T14", "Balloon"),
	npc("Little Girl Singing"),
	"Drop down",
	npc("Baked Apple Lady x2"),
	"Drop down",
	npc("White Bird Girl"),
	"Drop down",
	npc("Little Girl Shop"),
	"Run up 3 houses",
	MakeTOD("12pm", "Make Noon"),
	Cook("Wheat Butter Salmon", "Hearty if needed"),
	npc("Little Girl Cook"),
	"Drop down",
	npc("Fyson"),
	"Run up next house",
	npc("Flint Man Twice"),
	step("Drop out + ", wb(cps)("S")),
	Korok("T15", "Lift Rock"),
	step(wb(cps)("W")),
	npc("Find Kheel Lady"),
	"Activate Bareeda Naag",
	step(wb(cps)("W Turn")),
	Korok("T13", "Rock Circle"),
	detail(
		Shrine("Voo Lota"),
		"Start at 4 and keep skipping one to the right"),
	split("-"),
];