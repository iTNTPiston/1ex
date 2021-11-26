import King from "../img/king.png";
import KorokConfetti from "../img/korok-confetti.png";
import Equipment from "../img/equipment.png";
import Shrine from "../img/shrine.png";
import Tower from "../img/tower.png";

type Props = {
    src: string,
}
export const Icon:React.FunctionComponent<Props> = ({src})=>{
	switch (src){
		case "king":
			return <img src={King} alt="King" width="100%" height="100%"/>;
		case "korok-confetti":
			return <img src={KorokConfetti} alt="Korok" width="100%" height="100%"/>;
		case "equipment":
			return <img src={Equipment} alt="Equipment" width="100%" height="100%"/>;
		case "shrine":
			return <img src={Shrine} alt="Shrine" width="100%" height="100%"/>;
		case "tower":
			return <img src={Tower} alt="Tower" width="100%" height="100%"/>;
		default: return null;
	}
};
