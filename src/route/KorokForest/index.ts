import { image, Section } from "../create";
import { QuaRaym } from "./KF.1QuaRaym";
import { KuhnSidajj } from "./KF.2KuhnSidajj";

import RouteImage from "./KorokForest.png";

export const KorokForest = [
	Section("KOROK FOREST"),
	image(RouteImage),
	...QuaRaym,
	...KuhnSidajj,
];