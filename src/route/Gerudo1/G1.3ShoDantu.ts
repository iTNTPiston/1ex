import { ability, step, Tower, split, Boss, Korok, Shrine, detail } from "../create";
import { txt, gale, npc, cps, fury, important } from "../types";
import { wb } from "../windbomb";

export const ShoDantu = [
	ability(txt(gale(), " + 2 WB up tower"), {gale: 1}),
	step("Talk to ", npc("Kass"), " (21)"),
	Tower("Gerudo Tower"),
	split("-"),

    important("EQUIP ATK 3"),
    step("SQ to balloon"),
	Korok("G31", "Balloon", "Wait in BT"),
	step(wb(cps)("W> Turn")),
	Korok("G30", "Rock Circle"),
	step(wb(cps)("<N Turn")),
	detail(
        Boss("Luminous Talus", "4 BA w/ Lynel Bow"),
        "Move the block and glide+run to it. Get ambers"),
	Korok("G21", "Block Puzzle"),
	step(wb(cps)("E> Turn")),
	Shrine("Sho Dantu"),
	split("-")
];