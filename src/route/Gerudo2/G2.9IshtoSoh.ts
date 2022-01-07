import { ability, step, VariableChange, detail, Korok, Shrine, split, Boss } from "../create";
import { gale, cps, itm, txt, v, fury, important } from "../types";
import { wb } from "../windbomb";

export const IshtoSoh = [
    ability(step(gale()," + ", cps("N")), {gale: 1}),
	Korok("W53", "Lift Rock", "On pillar"),
    step(wb(cps)("N>> down")),
    Korok("L41", "Lift Rock Blocked", "Under rubble"),
    step(wb(cps)("E>")),
    ability(Boss("Luminous Talus", fury()), {fury: 3}),
    detail(
        important("BURN OUT FURY"),
        "Start recharging here to be back for the next 2 talus"),
    step(wb(cps)("S Turn")),
    Shrine("Ishto Soh"),
    split("-"),
];