import React from "react";
import "./App.css";
import { InstructionTable } from "./render";
import {computeInstruction} from "./route/engine";
import { InstructionLike } from "./route/types";

type Props = {
	config: InstructionLike[]
}

type State ={
	directionMode: string,
	frozenImage?: string,
}

class App extends React.Component<Props, State> {
	constructor(props: Props){
		super(props);
		this.state = {
			directionMode: "clock",
		};
	}

	toggleDirectionMode():void {
		this.setState({
			directionMode: this.state.directionMode === "clock" ? "compass" : "clock"
		},()=>{
			localStorage.setItem("DirectionMode", this.state.directionMode);
		});
	}

	componentDidMount():void {
		const localStoredDirectionMode = localStorage.getItem("DirectionMode");
		if(localStoredDirectionMode){
			this.setState({
				directionMode:localStoredDirectionMode
			});
		}
	}

	render(): JSX.Element{

		const inst = computeInstruction(this.props.config);
		return <>
			{this.state.frozenImage &&
			<div className="frozen-image" onClick={()=>this.setState({frozenImage: undefined})}>
				<img src={this.state.frozenImage} alt="Frozen Route Image" title="Click to hide" width="100%" height="100%"/>
			</div>}
			<div className="fixed-header">
				<button title="Toggle Direction Representation" onClick={()=>this.toggleDirectionMode()}>+</button>
				<input type="text" placeholder="WIP"></input>
				<button >&gt;</button>
				<button >X</button>
			</div>
			<InstructionTable 
				instructions={inst} 
				directionMode={this.state.directionMode} 
				setFrozenImage={(img)=>this.setState({frozenImage: img})}/>
		</>;
	}
}

export default App;
