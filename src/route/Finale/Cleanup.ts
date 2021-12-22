import { Korok, Warp, split, VariableChange, Shop, Section, step, detail, Cook, Discover, Icon } from "../create";
import { itm, npc, v, important, cps, txt, lnk } from "../types";
import { wb } from "../windbomb";

export const Cleanup = [
	Section("PLATEAU 3"),
	itm("Wild Set"),
	"WB up",
	Korok("K09", "Lift Rock", "Behind statue"),
	Warp("Da Hesho", "99.67%"),
	split("-"),

	step(wb(cps)("E")),
	detail(
		Korok("A48", "Flower Chase"),
		txt("Zora Set: ", v("heartyBass"), "/15 Hearty Bass. ", v("tail"), "/45 Tail. Wild Set: ", v("beetle"), "/15 beetle. ", v("honey"), "/16 Honey. Other: ", v("silentPrincess"), "/19 Silent Princess")),
	npc("Fairy Fountain"),
	"Upgrade Cloths",
	step(wb(cps)("N. Turn")),
	npc("Kilton (11 Sell 1)"),
	Shop("Monster Extract + Gear", "Need 707"),
	npc("Kilton (313233,31,32,33)"),
	step(wb(cps)("W")),
	Cook("Monster Cake", "Wheat Butter Suger Extract"),
	"Listen at window",
	npc("Mother Twice"),
	npc("Guardian Guy Twice"),
	npc("Hudson"),
	npc("Hudson after wedding"),

	Warp("Keo Ruug"),
	split("-"),

	npc("Blupee Guy"),
	npc("Blizzard Rod Guy"),
	VariableChange({rushroom: 4}),
	Shop("4 Rushrooms", v("rushroom")),
	npc("Trial Guy"),
    
	npc("Hestu"),
	important("GET GOLD POOP"),
	Warp("Kay Noh", "99.83%"),
	split("-"),

	itm("Rushroom if needed"),
	npc("Sesami"),
    
	npc("Rushroom Guy Twice"),
	important("EQUIP ATK 3"),
	wb(cps)("W"),
	Discover("Gerudo Desert Gateway"),
	detail(
		"Cleanup",
		txt("Shrine Quests: ", lnk("https://www.ign.com/wikis/the-legend-of-zelda-breath-of-the-wild/Shrine_Quests#Great_Hyrule_Forest_Shrines"))),
	"Check 2 Main Quests",
	"Check Shrine Quests",
	"Check Side Quests",
	"4 Key Items 2nd Page",
	detail(
		Warp("SOR", "99.91%"),
		"Last 9 percent is completed when you beat Final Dungeon"),
	split("{8 | ", v("srn"), " SRN | ", v("krk"), " KRK }"),

	important("EQUIP ATK 3"),
	"Final Trial Skip",
	Section("GG"),
	Icon("maz", "Maz Koshia"),
	split(""),
	"Check 1 Main Quest",
	"Check 100% Map"
];