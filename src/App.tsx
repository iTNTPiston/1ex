import React from "react";
import "./App.css";
import { InstructionTable } from "./render";
import {mainConfig} from "./route/config";
import {computeInstruction} from "./route/engine";

class App extends React.Component {
	render(): JSX.Element{

		const inst = computeInstruction(mainConfig);
		return <>
			<div className="fixed-header">
				<input type="text" placeholder="WIP"></input>
				<button >&gt;</button>
				<button >X</button>
			</div>
			<InstructionTable instructions={inst} directionMode="clock"/>
		</>;
	}
}

export default App;
