import { Section } from "../render/components";
import { flattenText, InstructionData } from "../route/types";
import {Icon} from "./components/Icon";
import { TextRender } from "./text";
import React from "react";
import clsx from "clsx";

type InstructionProps = InstructionData & {

    directionMode: string,

}

export const Instruction: React.FunctionComponent<InstructionProps> = ({
	icon, text, comment,indicatorClass,isSectionTitle,lineNumber,unindentStep,stepNumber,counterClassName,counterNumber,detail,detailRowSpan,indentIcon,image,imageRowSpan,directionMode,variables,detailClass
})=>{
	if(isSectionTitle){
		return <Section title={text}/>;
	}
	const hasDetail = detail && flattenText(detail);
	if(icon){
		//with icon, 2 rows
		return <>
			<tr>
				<td className="line-number font-number">{lineNumber}</td>
				<td className={clsx("counter font-number",counterClassName)}>{counterNumber || "."}</td>
				<td className="step-number font-number">{stepNumber}</td>
				<td className="icon" rowSpan={2}><Icon src={icon}/></td>
				<td className="main-text"><div className="main-text"><TextRender textBlock={text} directionMode={directionMode} variables={variables}/></div></td>
				<td className={clsx("indicator",indicatorClass)}></td>
				{detailRowSpan && <td className={clsx("detail",hasDetail&&detailClass)} rowSpan={detailRowSpan}>{detail&&<TextRender textBlock={detail} directionMode={directionMode} variables={variables}/>}</td>}
				{imageRowSpan && <td className={clsx("image-column",image&&"image-box")} rowSpan={imageRowSpan}>{image && <img width="100%" src={image}  alt="Route Image"/>}</td>}
			</tr>
			<tr>
				<td className="line-number font-number">{lineNumber && lineNumber+1}</td>
				<td className="counter font-number">.</td>
				<td className="step-number font-number"></td>
    
				<td className="main-text comment-text">{comment && <TextRender textBlock={comment} directionMode={directionMode} variables={variables}/>}</td>
				<td className={clsx("indicator")}></td>
				{!detail && <td className={clsx("detail")} ></td>}
				{!image && <td className="image-column"></td>}
			</tr>
		</>;

	}else{
		if(unindentStep){
			return                 <tr>
				<td className="line-number font-number">{lineNumber}</td>
				<td className={clsx("counter font-number",counterClassName)}>{counterNumber || "."}</td>
				<td className="main-text" colSpan={3}><TextRender textBlock={text} directionMode={directionMode} variables={variables}/></td>
				<td className={clsx("indicator",indicatorClass)}></td>
				{detailRowSpan && <td className={clsx("detail",hasDetail&&detailClass)} rowSpan={detailRowSpan}>{detail&&<TextRender textBlock={detail} directionMode={directionMode} variables={variables}/>}</td>}
				{imageRowSpan && <td className={clsx("image-column",image&&"image-box")} rowSpan={imageRowSpan}>{image && <img width="100%" src={image}  alt="Route Image"/>}</td>}
			</tr>;
		}else if(indentIcon){
			return                 <tr>
				<td className="line-number font-number">{lineNumber}</td>
				<td className={clsx("counter font-number",counterClassName)}>{counterNumber || "."}</td>
				<td className="step-number font-number">{stepNumber}</td>
				<td className="icon" ></td>
				<td className="main-text" ><TextRender textBlock={text} directionMode={directionMode} variables={variables}/></td>
				<td className={clsx("indicator",indicatorClass)}></td>
				{detailRowSpan && <td className={clsx("detail",hasDetail&&detailClass)} rowSpan={detailRowSpan}>{detail&&<TextRender textBlock={detail} directionMode={directionMode} variables={variables}/>}</td>}
				{imageRowSpan && <td className={clsx("image-column",image&&"image-box")} rowSpan={imageRowSpan}>{image && <img width="100%" src={image} alt="Route Image"/>}</td>}
			</tr>;
		}else{
			return                 <tr>
				<td className="line-number font-number">{lineNumber}</td>
				<td className={clsx("counter font-number",counterClassName)}>{counterNumber || "."}</td>
				<td className="step-number font-number">{stepNumber}</td>
				<td className="main-text" colSpan={2}><TextRender textBlock={text} directionMode={directionMode} variables={variables}/></td>
				<td className={clsx("indicator",indicatorClass)}></td>
				{detailRowSpan && <td className={clsx("detail",hasDetail&&detailClass)} rowSpan={detailRowSpan}>{detail&&<TextRender textBlock={detail} directionMode={directionMode} variables={variables}/>}</td>}
				{imageRowSpan && <td className={clsx("image-column",image&&"image-box")} rowSpan={imageRowSpan}>{image && <img width="100%" src={image} alt="Route Image"/>}</td>}
			</tr>;
		}

	}
};

type InstructionTableData = {
    instructions: InstructionData[],
    directionMode: string,

}

export const InstructionTable: React.FunctionComponent<InstructionTableData> = ({instructions, directionMode,})=>{ 
	return (
		<table>
			{instructions.map((data, i)=>
				<Instruction key={`line${i}`} {...data} directionMode={directionMode} />
			)}
			{Array.from({length:10},()=><tr><td colSpan={2}>&nbsp;</td><td className="main-text" colSpan={3}>&nbsp;</td><td colSpan={3}>&nbsp;</td></tr>)}
			
		</table>
	);
};
