import { TextBlock, TextLike, txt } from "./types";

export const wb = (directionModeFn: (direction: string)=>TextBlock): (windbombInstructionsString: string)=>TextBlock => {
	return (wbInstStr)=>{
		const parts = wbInstStr.split("+").map(str=>str.trim());
		const output:TextLike[] = [];
		parts.forEach((windbomb, i)=>{
			const spaceIndex = windbomb.indexOf(" ");
			if(spaceIndex >= 0){
				output.push(directionModeFn(windbomb.substring(0, spaceIndex)));
				output.push(windbomb.substring(spaceIndex));
			}else{
				output.push(directionModeFn(windbomb));
			}
			if(i<parts.length - 1){
				output.push(" + ");
			}
		});
		return txt(...output);
	};
};