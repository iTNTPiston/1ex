import Chest from "../img/chest.png";
import ChestSpecial from "../img/chest-special.png";
import King from "../img/king.png";
import Korok from "../img/korok.png";
import KorokAcorn from "../img/korok-acorn.png";
import KorokConfetti from "../img/korok-confetti.png";
import KorokMagnesis from "../img/korok-magnesis.png";
import KorokRockUnder from "../img/korok-rock-under.png";
import KorokShoot from "../img/korok-shoot.png";
import Equipment from "../img/equipment.png";
import Shrine from "../img/shrine.png";
import Tower from "../img/tower.png";
import Warp from "../img/warp.png";

type Props = {
    src: string,
}
export const Icon:React.FunctionComponent<Props> = ({src})=>{
	switch (src){
		case "chest":
			return <img src={Chest} alt="Chest" width="100%" height="100%"/>;
		case "chest-special":
			return <img src={ChestSpecial} alt="ChestSpecial" width="100%" height="100%"/>;
		case "king":
			return <img src={King} alt="King" width="100%" height="100%"/>;
		case "korok":
			return <img src={Korok} alt="Korok" width="100%" height="100%"/>;
		case "korok-acorn":
			return <img src={KorokAcorn} alt="Korok" width="100%" height="100%"/>;
		case "korok-confetti":
			return <img src={KorokConfetti} alt="Korok" width="100%" height="100%"/>;
		case "korok-magnesis":
			return <img src={KorokMagnesis} alt="Korok" width="100%" height="100%"/>;
		case "korok-rock-under":
			return <img src={KorokRockUnder} alt="Korok" width="100%" height="100%"/>;
		case "korok-shoot":
			return <img src={KorokShoot} alt="Korok" width="100%" height="100%"/>;
		case "equipment":
			return <img src={Equipment} alt="Equipment" width="100%" height="100%"/>;
		case "shrine":
			return <img src={Shrine} alt="Shrine" width="100%" height="100%"/>;
		case "tower":
			return <img src={Tower} alt="Tower" width="100%" height="100%"/>;
		case "warp":
			return <img src={Warp} alt="Warp" width="100%" height="100%"/>;
		default: return null;
	}
};
