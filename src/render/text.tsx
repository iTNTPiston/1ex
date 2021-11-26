import { TextBlock, Text } from "../route/types";

type Props = {
    textBlock: TextBlock,
	variables: {[key: string]:number},
	directionMode: string
}

export const TextRender:React.FunctionComponent<Props> = ({textBlock, directionMode, variables})=>{
    
	if(Array.isArray(textBlock)){
		return <>{textBlock.map((text,i)=><Render key={i} {...text} directionMode={directionMode} variables={variables}/>)}</>;
	}
	return <Render {...textBlock} directionMode={directionMode} variables={variables}/>;
};

type RenderProps = Text & {
	directionMode: string,
	variables: {[key: string]:number}
}

const Render:React.FunctionComponent<RenderProps> = ({colorClass, content, directionMode, variables})=>{
	if(colorClass ==="color-direction-compass" && directionMode === "clock"){
		return <span className={"color-direction-clock"}>{compassToClock[content] || "[??:??]"}</span>;
	}
	if(colorClass ==="color-direction-clock" && directionMode === "compass"){
		return <span className={"color-direction-compass"}>{clockToCompass[content] || "???"}</span>;
	}
	if(colorClass ==="color-link"){
		return <a href={content}>{content}</a>;
	}
	if(colorClass ==="color-variable"){
		return <span className="color-variable">{variables[content]}</span>;
	}
	return <span className={colorClass ?? ""}>{content}</span>;
};

//Convert between clock and compass directions
const compassToClock: {[compass: string]:string} = {
	"N":"[12:00]",
	"N.":"[12:05]",
	"E":"[3:00]",
	"S":"[6:00]",
	"W":"[9:00]",
	"<N":"[11:30]",
};

const clockToCompass: {[clock: string]:string} = {

};