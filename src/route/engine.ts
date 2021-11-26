import { instructionLikeToInstruction, InstructionData, InstructionLike, txt, lcn, npc, stringToText } from "./types";

export const computeInstruction = (config: InstructionLike[]):InstructionData[] => {
	let lineNumber = 1;
	let korokCount = 0;
	let korokSeed = 0;
	let shrineCount = 0;

	let step = "1";
	let noDetailYet = true;
	let noImageYet = true;

	const variables:{[key: string]:number} = {};

	const input = config.map(instructionLikeToInstruction);

	const output: InstructionData[] = [];
	input.forEach((data,i)=>{
		if(data.variableChange){
			for(const key in data.variableChange){
				if(!(key in variables)){
					variables[key] = 0;
				}
				variables[key]+=data.variableChange[key];
			}
			return;
		}
		if(data.variableSet){
			for(const key in data.variableSet){
				variables[key]=data.variableSet[key];
			}
			return;
		}

		if(data.asSection){
			output.push({
				lineNumber,
				isSectionTitle: true,
				isSplit: false,
				text: data.text,
				variables: {}
			});
			step = "1";
			noDetailYet = true;
			noImageYet = true;
		}else{
			const props:InstructionData = {
				lineNumber,
				isSectionTitle: false,
				isSplit: false,
				text: data.text,
				icon: data.icon,
				comment: data.comment,
				unindentStep: data.unindentStep,
				indentIcon: data.indentIcon,
				variables: {...variables}
			};

			if(data.asStep){
				props.stepNumber = step;
				step = incStep(step);
				props.indicatorClass="indicator-color-step";
			}else if(data.asSplit){
				step = "1";
				props.indicatorClass="indicator-color-split";
				noDetailYet = true;
			}else{
				props.indicatorClass="indicator-color-none";
			}

			if(data.shrineChange !== 0){
				shrineCount+=data.shrineChange;
				if(korokCount===0){
					props.text = txt(lcn(`${shrineCount} `),data.text);
				}else{
					props.text = txt(lcn(`${shrineCount}.${korokCount % 100} `),data.text);
				}
				props.counterNumber = shrineCount;
				props.counterClassName = "counter-color-shrine";
			}else if(data.korokChange !== 0){
				if(data.korokChange > 0){
					korokCount += data.korokChange;
					korokSeed += data.korokChange;
				}else{
					korokSeed -= data.korokChange;//Hestu only takes seed, not total count
				}
				props.text = txt(npc(`${korokSeed % 100} `),data.text);
				props.counterNumber = korokCount;
				props.counterClassName = "counter-color-korok";
			}

			if(data.detail){
				props.detail = data.detail;
				let extra = 0;
				if(data.icon){
					extra++;
				}
				let j = i+1;
				for(;j<input.length;j++){
					if(input[j].asSection || input[j].asSplit || input[j].detail){
						break;
					}
					if(input[j].icon){
						extra++;
					}
					if(input[j].variableChange || input[j].variableSet){
						extra--;
					}
				}
				props.detailRowSpan = j - i + extra;
				noDetailYet = false;
			}else if(noDetailYet){
				props.detail = stringToText("");
				props.detailRowSpan = 1;
			}

			if(data.image){
				props.image = data.image;
				let extra = 0;
				if(data.icon){
					extra++;
				}
				let j = i+1;
				for(;j<input.length;j++){
					if(input[j].asSection || input[j].image){
						break;
					}
					if(input[j].icon){
						extra++;
					}
					if(input[j].variableChange || input[j].variableSet){
						extra--;
					}
				}
				props.imageRowSpan = j - i + extra;
				noImageYet = false;
			}else if(noImageYet){
				props.imageRowSpan = 1;
			}
            
			output.push(props);
			lineNumber++;
			if(data.icon){
				lineNumber++;
			}
		}
        
	});

	return output;
};

const incStep = (step:string):string =>{
	if(step==="Z"){
		return "0";
	}
	if(step === "9"){
		return "A";
	}
	return String.fromCharCode(step.charCodeAt(0)+1);
};

