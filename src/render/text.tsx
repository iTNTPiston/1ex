import { TextBlock, Text } from "../route/engine";

type Props = {
    textBlock: TextBlock,
	directionMode: string
}

export const TextRender:React.FunctionComponent<Props> = ({textBlock, directionMode})=>{
    
	if(Array.isArray(textBlock)){
		return <>{textBlock.map((text,i)=><Render key={i} {...text} directionMode={directionMode}/>)}</>;
	}
	return <Render {...textBlock} directionMode={directionMode}/>;
};

type RenderProps = Text & {
	directionMode: string,
}

const Render:React.FunctionComponent<RenderProps> = ({colorClass, content, directionMode})=>{
	if(colorClass ==="color-direction-compass" && directionMode === "clock"){
		return <span className={"color-direction-clock"}>{compassToClock[content] || "[??:??]"}</span>;
	}
	if(colorClass ==="color-direction-clock" && directionMode === "compass"){
		return <span className={"color-direction-compass"}>{clockToCompass[content] || "???"}</span>;
	}
	return <span className={colorClass ?? ""}>{content}</span>;
};

//Convert between clock and compass directions
const compassToClock: {[compass: string]:string} = {
	"N":"[12:00]",
	"E":"[3:00]",
	"S":"[6:00]",
	"W":"[9:00]",
	"<N":"[11:30]",
}

const clockToCompass: {[clock: string]:string} = {

}