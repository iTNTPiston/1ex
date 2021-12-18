import { Snap, detail, ability, Icon, split, MakeTOD, step, Korok, Shop, Cook, Shrine } from "../create";
import { emy, txt, rne, npc, cps } from "../types";
import { wb } from "../windbomb";

export const VooLota= [
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

	MakeTOD("12pm", "Make Noon"),
	step("Drop down"),
	Korok("T14", "Balloon"),
	npc("Little Girl Singing"),
	"Drop down",
	npc("Find Kheel Lady"),
	step("SQ to pillar DEFUSE"),
	Korok("T15", "Lift Rock"),
	"Activate Bareeda Naag",
	step("SQ to pond"),
	npc("Little Girl Water"),
	step(wb(cps)("<W to pad")),
	npc("Flight Pad Lady (BN Quest)"),
	npc("Apple Woman Twice"),
	"Drop down",
	npc("White Bird Girl"),
	"Drop down",
	npc("Little Girl Shop"),
	Shop("All Arrows"),
	"Run up 3 houses",
	Cook("Wheat Butter Salmon", "Hearty if needed"),
	npc("Little Girl Cook"),
	"Drop down",
	npc("Fyson"),
	"Run up next house",
	npc("Flint Man Twice"),
	"Drop out",
	step(wb(cps)("<W TS")),
	Korok("T13", "Rock Circle"),
	detail(
		Shrine("Voo Lota"),
		"Start at 4 and keep skipping one to the right"),
	split("-"),
];