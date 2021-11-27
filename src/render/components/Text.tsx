import { TextBlock, Text } from "../../route/types";

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
	"N>":"[12:30]",
	"N>>": "[1:00]",
	"N>>>":"[1:15]",
	"NE":"[1:30]",
	"<<<E":"[1:45]",
	"<<E":"[2:00]",
	"<E":"[2:30]",
	".E":"[2:55]",
	"E":"[3:00]",
	"E.":"[3:05]",
	"E>":"[3:30]",
	"E>>":"[4:00]",
	"E>>>":"[4:15]",
	"SE":"[4:30]",
	"<<<S":"[4:45]",
	"<<S":"[5:00]",
	"<S":"[5:30]",
	".S":"[5:55]",
	"S":"[6:00]",

	"<W":"[8:30]",
	".W":"[8:55]",
	"W":"[9:00]",
	"<N":"[11:30]",
	".N":"[11:55]"
};

const clockToCompass: {[clock: string]:string} = {

};