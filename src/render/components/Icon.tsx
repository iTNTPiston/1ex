import ImageMap from "../../img";

type Props = {
    src: string,
}

export const Icon:React.FunctionComponent<Props> = ({src})=>{
	const map = ImageMap as {[name: string]:string};
	const image = map[src];
	if(!image){
		return null;
	}
	
	return <img src={image} alt={`Icon ${src}`} width="100%" height="100%"/>;
};
