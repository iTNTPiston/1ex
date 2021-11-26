import { itm, Section, txt, Equipment, important, unindent, step, Shrine, split, detail, indent, Tower, Korok, Icon, image } from "../create";
import PlateauImage from "./plateau.png";

//The Main Route Object
export const plateau = [
    Section("PLATEAU 1"),
    image(txt("SOR Clip, no TOD"),PlateauImage),
    itm("6 Peppers"),
    Equipment("Potlid + Spear", "Spear for FDC"),
    unindent(important("KEEP POTLID FOR THUNDERBOI")),
    txt("TOT Clip"),
    Equipment("Bow + Arrow"),
    txt("BLSS to bombs"),
    detail(Shrine("Ja Baij"),"Either aim more right for safe WB or do gamer"),
    split(),

    txt("BLSS to mag"),
    Shrine("Oman Au"),
    split(),

    detail(txt("Scan Amiibos"),"Use Mipha for fish so you also get hearty bass. Get around 5-7 rushrooms 5/55."),
    indent(txt("Rush/Sunshroom")),
    indent(txt("15+ Hyrule Bass")),
    indent(txt("Voltfin Trout")),
    detail(txt(""),"Eat useless shrooms for food, then eat useless fish for food"),
    txt("WB to tower"),
    Tower("Great Plateau Tower"),
    split(),

    step(txt("BLSS to old man's hut")),
    Korok("P18", "Confetti", "On top of hut"),
    step(itm("Baked Apple")),
    Equipment("Torch"),
    step(txt("WB to stasis")),
    detail(Equipment("Hammer", "Switch to hammer"), "Keep the spear to get a sneakstrike in castle later"),
    Shrine("Owa Daim"),
    split(),

    step(txt("Boulder launch use ", itm("hammer"))),
    step(txt("BTB to cryo")),
    step(Shrine("Keh Namut")),

    txt("BLSS to ToT"),
    Icon("king", "Plateau", 0, 0),
    split()
];