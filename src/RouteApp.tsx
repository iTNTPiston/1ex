import React from "react";
import "./App.css";
import { InstructionTable } from "./render";
import {computeInstruction, Instruction, TextBlock} from "./route/engine";

type Props = {
	config: (Instruction | TextBlock)[]
}

type State ={
	directionMode: string,
}

class App extends React.Component<Props, State> {
	constructor(props: Props){
		super(props)
		this.state = {
			directionMode: "clock",
		}
	}

	toggleDirectionMode():void {
		this.setState({
			directionMode: this.state.directionMode === "clock" ? "compass" : "clock"
		})
	}

	render(): JSX.Element{

		const inst = computeInstruction(this.props.config);
		return <>
			<div className="fixed-header">
			<button title="Toggle Direction Representation" onClick={()=>this.toggleDirectionMode()}>+</button>
				<input type="text" placeholder="WIP"></input>
				<button >&gt;</button>
				<button >X</button>
			</div>
			<InstructionTable instructions={inst} directionMode={this.state.directionMode}/>
		</>;
	}
}

export default App;
