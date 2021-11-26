import { TextBlock, Text } from "../route/engine";

type Props = {
    textBlock: TextBlock
}

export const TextRender:React.FunctionComponent<Props> = ({textBlock})=>{
    
	if(Array.isArray(textBlock)){
		return <>{textBlock.map((text,i)=><Render key={i} {...text}/>)}</>;
	}
	return <Render {...textBlock}/>;
};

const Render:React.FunctionComponent<Text> = ({colorClass, content})=>{
	return <span className={colorClass ?? ""}>{content}</span>;
};