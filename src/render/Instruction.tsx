import { Section, Icon, TextRender } from "./components";
import { flattenText, InstructionData } from "../route/types";
import React from "react";
import clsx from "clsx";

type InstructionProps = InstructionData & {
    directionMode: string,
	setFrozenImage: (image:string)=>void,
}

export const Instruction: React.FunctionComponent<InstructionProps> = ({
	icon, text, comment,indicatorClass,isSectionTitle,lineNumber,unindentStep,stepNumber,counterClassName,counterNumber,detail,detailRowSpan,indentIcon,image,imageRowSpan,directionMode,variables,detailClass,setFrozenImage
})=>{
	if(isSectionTitle){
		return <Section title={text}/>;
	}
	const hasDetail = detail && flattenText(detail);
	const lineNumberCell = <td className="line-number font-number">{lineNumber}</td>;
	const counterCell = <td className={clsx("counter font-number", counterClassName)}>{counterNumber || "."}</td>;
	const stepNumberCell = <td className="step-number font-number">{stepNumber}</td>;
	const indicatorCell = <td className={clsx("indicator",indicatorClass)}></td>;
	const detailCell = detailRowSpan && <td className={clsx("detail",hasDetail&&detailClass)} rowSpan={detailRowSpan}>{detail&&<TextRender textBlock={detail} directionMode={directionMode} variables={variables}/>}</td>;
	const imageCell = imageRowSpan && <td className={clsx("image-column",image&&"image-box") } rowSpan={imageRowSpan} onClick={()=>{
		if(image){
			setFrozenImage(image);
		}
	}}>
		{image && <img width="100%" src={image}  alt="Route Image" title="Click to pin"/>}
	</td>;
	if(icon){
		//with icon, 2 rows
		return <>
			<tr>
				{lineNumberCell}{counterCell}{stepNumberCell}
				<td className="icon" rowSpan={2}>
					<Icon src={icon}/>
				</td>
				<td className="main-text">
					<div className="main-text">
						<TextRender textBlock={text} directionMode={directionMode} variables={variables}/>
					</div>
				</td>
				{indicatorCell}{detailCell}{imageCell}
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
				{lineNumberCell}
				{counterCell}
				<td className="main-text" colSpan={3}>
					<TextRender textBlock={text} directionMode={directionMode} variables={variables}/>
				</td>
				{indicatorCell}
				{detailCell}
				{imageCell}
			</tr>;
		}else if(indentIcon){
			return                 <tr>
				{lineNumberCell}
				{counterCell}
				{stepNumberCell}
				<td className="icon" ></td>
				<td className="main-text" >
					<TextRender textBlock={text} directionMode={directionMode} variables={variables}/>
				</td>
				{indicatorCell}
				{detailCell}
				{imageCell}
			</tr>;
		}else{
			return                 <tr>
				{lineNumberCell}
				{counterCell}
				{stepNumberCell}
				<td className="main-text" colSpan={2}>
					<TextRender textBlock={text} directionMode={directionMode} variables={variables}/>
				</td>
				{indicatorCell}
				{detailCell}
				{imageCell}
			</tr>;
		}
	}
};

type InstructionTableData = {
    instructions: InstructionData[],
    directionMode: string,
	setFrozenImage: (image:string)=>void,
}

export const InstructionTable: React.FunctionComponent<InstructionTableData> = ({instructions, directionMode,setFrozenImage})=>{ 
	return (
		<table>
			{instructions.map((data, i)=>
				<Instruction key={`line${i}`} {...data} directionMode={directionMode} setFrozenImage={setFrozenImage} />
			)}
			{Array.from({length:10},()=><tr><td colSpan={2}>&nbsp;</td><td className="main-text" colSpan={3}>&nbsp;</td><td colSpan={3}>&nbsp;</td></tr>)}
			
		</table>
	);
};
