import React from "react";
import "./App.css";
import { InstructionTable } from "./render";
import ImageDirectionClock from "./img/direction-clock.png";
import ImageDirectionCompass from "./img/direction-compass.png";
import {computeInstruction} from "./route/engine";
import { InstructionLike } from "./route/types";

type Props = {
	config: InstructionLike[],
}

type State ={
	frozenImage?: string,
	directionMode: string,
}

class App extends React.Component<Props, State> {
	constructor(props: Props){
		super(props);
		this.state = {
			directionMode: "clock",
		};
	}

	componentDidMount():void {
		const localStoredDirectionMode = localStorage.getItem("DirectionMode");
		if(localStoredDirectionMode){
			this.setState({
				directionMode:localStoredDirectionMode
			});
		}
	}

	toggleDirectionMode(): void {
		this.setState({
			directionMode: this.state.directionMode === "clock" ? "compass" : "clock"
		},()=>{
			localStorage.setItem("DirectionMode", this.state.directionMode);
		});
	}

	render(): JSX.Element{

		const instructions = computeInstruction(this.props.config);

		return <>
			{this.state.frozenImage &&
			<div className="frozen-image" onClick={()=>this.setState({frozenImage: undefined})}>
				<img src={this.state.frozenImage} alt="Frozen Route Image" title="Click to hide" width="100%" height="100%"/>
			</div>}
			<div className="fixed-control">
				<button onClick={()=>this.toggleDirectionMode()}>
					<img src={this.state.directionMode === "clock" ? ImageDirectionClock : ImageDirectionCompass} height="48" width="auto" alt="Direction" title="Toggle Direction Mode"/>
				</button>
			</div>
			<InstructionTable 
				instructions={instructions} 
				directionMode ={this.state.directionMode}
				setFrozenImage={(img)=>this.setState({frozenImage: img})}/>
		</>;
	}
}

export default App;
