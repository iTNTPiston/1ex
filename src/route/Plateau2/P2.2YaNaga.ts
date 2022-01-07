import { step, Korok, detail, Cook, Shrine, split, VariableChange, ingredient } from "../create";
import { itm, cps, emy, npc, txt, v } from "../types";
import { wb } from "../windbomb";

export const YaNaga = [
    step("SQ to old man hut"),
    itm("Baked Apple"),
    Korok("P18", "Confetti", "Top of hut"),
    detail(
        step(wb(cps)("<<W + SW")),
        "STRONG WIND AREA be careful of bomb placement for the midair"),
    Korok("L21", "Block Puzzle"),
    step(wb(cps)("<E Turn")),
    Korok("L22", "Acorn", "Hanging from tree"),
    "Land on big horse",
    "Ride toward camp",
    Korok("L36", "Balloon", "Bomb in tree"),
    "Keep riding",
    Korok("L62", "Lift Rock", "Under rubble (mid of 3)"),
    txt("Ride to ", npc("Quest Guy")),
    detail(
        Cook("Fruit Cake + Speed"), 
        "Apple, Banana, Wheat, Sugar. Durian works too. Next fast cooking location is selmie's spot so you probably want to cook here. You could also cook in Kara Kara if you missed here"),
    "Run to flower chase",
    Korok("L64", "Flower Chase"),
    "Glide to race start",
    step(wb(cps)("<W Turn")),
    Korok("L63", "Offer Apple"),
    step(wb(cps)("N>")),
    VariableChange({tail: 1}),
    detail(
        txt("Kill ", emy("Black Lizalfos")),
        ingredient("tail", 45)),
    "Run finish race",
    Korok("L47", "Race"),
    step(wb(cps)("<N Turn")),
    Korok("L38", "Block Puzzle", "2nd hole"),
    step(wb(cps)("<N Turn")),
    Korok("L24", "Lift Rock", "3rd hole"),
    step(cps("N")),
    Korok("L08", "Race", "SQ DEFUSE"),
    step(cps("SE Delay")),
    Korok("L25", "Confetti", "Top of tree"),
    step(cps("SE")),
    Shrine("Ya Naga"),
    split("-"),

    step(cps("E")),
    npc("Talk to Wife"),
];