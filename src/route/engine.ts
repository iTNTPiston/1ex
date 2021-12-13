import { instructionLikeToInstruction, InstructionData, InstructionLike, txt, lcn, npc, stringToText, Instruction, TextBlock, Text } from "./types";

export class InstructionEngine{
	private MEMORY_ROMAN = ["","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"];
	private lineNumber = 1;
	private korokCount = 0;
	private korokSeed = 0;
	private shrineCount = 0;
	private memoryCount = 0;
	private talusCount = 0;
	private hinoxCount = 0;
	private gale = 0;
	private fury = 0;
	private step = "1";
	private noDetailYet = true;
	private noImageYet = true;
	private variables:{[key: string]:number} = {};

	private applyImage = "";

	private initialize(): void {
		this.lineNumber = 1;
		this.korokCount = 0;
		this.korokSeed = 0;
		this.shrineCount = 0;
		this.memoryCount = 0;
		this.talusCount = 0;
		this.hinoxCount = 0;
		this.gale = 0;
		this.fury = 0;
		this.step = "1";
		this.noDetailYet = true;
		this.noImageYet = true;
		this.variables = {};
	}

	compute(config: InstructionLike[]): InstructionData[] {
		this.initialize();
		const input = config.map(instructionLikeToInstruction);
		return this.computeInstructions(input);
	}

	private computeInstructions(input: Instruction[]):InstructionData[] {
		const output: InstructionData[] = [];
		input.forEach((_, i)=>this.processInstruction(input, i, output));
		return output;
	}

	private processInstruction(input: Instruction[], i:number, output: InstructionData[]) {
		const data = input[i];
		if(data.image){
			this.applyImage = data.image;
			if(i < input.length - 1){
				return;
			}
		}
		if(data.variableChange){
			for(const key in data.variableChange){
				if(!(key in this.variables)){
					this.variables[key] = 0;
				}
				this.variables[key]+=data.variableChange[key];
			}
			return;
		}
		if(data.variableSet){
			for(const key in data.variableSet){
				this.variables[key]=data.variableSet[key];
			}
			return;
		}

		let error: string | undefined = undefined;
		let furyText = "?";
		let galeText = "?";
		if(data.ability){
			if(this.gale === 0){
				this.gale = 3;
			}
			if(this.fury === 0){
				this.fury = 3;
			}
			if(data.ability.fury){
				if(data.ability.fury > this.fury){
					error = "Not enough fury";
				}else{
					furyText = this.getAbilityChangeText(this.fury, data.ability.fury);
					this.fury -= data.ability.fury;
				}
			}
			if(data.ability.gale){
				if(data.ability.gale > this.gale){
					error = "Not enough gale";
				}else{
					galeText = this.getAbilityChangeText(this.gale, data.ability.gale);
					this.gale -= data.ability.gale;
				}
			}
		}

		if(data.asSection){
			output.push({
				lineNumber: this.lineNumber,
				isSectionTitle: true,
				isSplit: false,
				text: data.text,
				variables: {}
			});
			this.step = "1";
			this.noDetailYet = true;
			this.noImageYet = true;
		}else{
			const props:InstructionData = {
				lineNumber: this.lineNumber,
				isSectionTitle: data.asSection,
				isSplit: data.asSplit,
				text: this.applyAbilityTextBlock(data.text, furyText, galeText),
				icon: data.icon,
				comment: this.applyAbilityTextBlock(data.comment, furyText, galeText),
				unindentStep: data.unindentStep,
				indentIcon: data.indentIcon,
				variables: {
					...this.variables,
					krk: this.korokCount,
					seed: this.korokSeed,
					srn: this.shrineCount,
					fury: this.fury,
					gale: this.gale
				},
				error:error
			};

			if(data.asStep){
				props.stepNumber = this.step;
				this.incStep();
				props.indicatorClass="indicator-color-step";
			}else if(data.asSplit){
				this.step = "1";
				props.indicatorClass="indicator-color-split";
				this.noDetailYet = true;
			}else{
				props.indicatorClass="indicator-color-none";
			}

			if(data.shrineChange !== 0){
				this.shrineCount+=data.shrineChange;
				if(this.korokCount===0){
					props.text = txt(lcn(`${this.shrineCount} `),data.text);
				}else{
					props.text = txt(lcn(`${this.shrineCount}.${this.getKorokCountLastTwoDigits()} `),data.text);
				}
				props.counterNumber = String(this.shrineCount);
				props.counterClassName = "counter-color-shrine";
			}else if(data.korokChange !== 0){
				if(data.korokChange > 0){
					this.korokCount += data.korokChange;
					this.korokSeed += data.korokChange;
					props.text = txt(npc(`${this.getKorokSeedLastTwoDigits()} `),data.text);
					props.counterNumber = String(this.korokCount);
					props.counterClassName = "counter-color-korok";
				}else{
					this.korokSeed += data.korokChange;//Hestu only takes seed, not total count
					props.text = txt(npc(`${this.getKorokSeedLastTwoDigits()} `),data.text);
				}
			}else if(data.asMemory){
				this.memoryCount++;
				props.counterNumber = this.MEMORY_ROMAN[this.memoryCount];
				props.counterClassName = "counter-color-memory";
			}else if(data.bossType){
				switch(data.bossType){
					case "Talus":
						this.talusCount++;
						props.counterNumber  = String(this.talusCount);
						props.counterClassName = "counter-color-boss";
						break;
					case "Hinox":
						this.hinoxCount++;
						props.counterNumber  = String(this.hinoxCount);
						props.counterClassName = "counter-color-boss";
						break;
				}
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
					if(input[j].variableChange || input[j].variableSet || input[j].image){
						extra--;
					}
				}
				if(j >= input.length || !(input[j].detail || input[j].asSection)){
					props.detailClass = "detail-box detail-box-bottom-border";
				}else{
					props.detailClass = "detail-box";
				}
				props.detailRowSpan = j - i + extra;
				this.noDetailYet = false;
			}else if(this.noDetailYet){
				props.detail = stringToText("");
				props.detailRowSpan = 1;
				if(data.icon){
					props.displayEmptyDetailSecondRow = true;
				}
			}

			if(this.applyImage){
				props.image = this.applyImage;
				this.applyImage = "";
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
				this.noImageYet = false;
			}else if(this.noImageYet){
				props.imageRowSpan = 1;
				if(data.icon){
					props.displayEmptyImageSecondRow = true;
				}
			}
            
			output.push(props);
			this.lineNumber++;
			if(data.icon){
				this.lineNumber++;
			}
		}
	}

	private incStep():void {
		if(this.step === "Z"){
			this.step = "0";
		}else if(this.step === "9"){
			this.step = "A";
		}else{
			this.step = String.fromCharCode(this.step.charCodeAt(0)+1);
		}
	}

	private getKorokCountLastTwoDigits(): string {
		return this.getLastTwoDigits(this.korokCount);
	}

	private getKorokSeedLastTwoDigits(): string {
		return this.getLastTwoDigits(this.korokSeed);
	}

	private getLastTwoDigits(value: number): string {
		if(value<10){
			return String(value);
		}
		const mod100 = value % 100;
		if(mod100 < 10){
			return "0" + mod100;
		}
		return String(mod100);
	}

	private getAbilityChangeText(current: number, use: number): string{
		if(current === 3){
			if(use === 1){
				return "1";
			}
			return `1-${use}`;
		}
		if(current === 2){
			if(use === 1){
				return "2";
			}
			return "2-3";
		}
		return "3";
	}

	private applyAbilityTextBlock(textBlock: TextBlock | undefined, furyText: string, galeText: string): TextBlock {
		if(!textBlock){
			return [];
		}
		if(Array.isArray(textBlock)){
			return textBlock.map(t=>this.applyAbilityText(t, furyText, galeText));
		}
		return this.applyAbilityText(textBlock, furyText, galeText);
	}

	private applyAbilityText(text: Text, furyText: string, galeText: string): Text {
		if(text.colorClass === "color-fury"){
			return {
				...text,
				content: "FURY "+furyText
			};
		}else if(text.colorClass === "color-gale"){
			return {
				...text,
				content: "GALE "+galeText
			};
		}
		return text;
	}
}
