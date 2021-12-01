import React from "react";
import "./App.css";
import { InstructionTable } from "./render";
import ImageDirectionClock from "./img/direction-clock.png";
import ImageDirectionCompass from "./img/direction-compass.png";
import { InstructionEngine } from "./route/engine";
import { ChangeData, InstructionLike } from "./route/types";
import { ChangeLog } from "./render/ChangLog";
import queryString from "query-string";

type Props = {
	config: InstructionLike[],
	changelog: ChangeData[],
}

type State ={
	frozenImage?: string,
	directionMode: string,
	showChangeLog: boolean,
}

const engine = new InstructionEngine();

class App extends React.Component<Props, State> {
	constructor(props: Props){
		super(props);
		this.state = {
			directionMode: "clock",
			showChangeLog: false,
		};
	}

	componentDidMount():void {
		const localStoredDirectionMode = localStorage.getItem("DirectionMode");
		if(localStoredDirectionMode){
			this.setState({
				directionMode:localStoredDirectionMode
			});
		}

		const lastViewedVersion = localStorage.getItem("LastVersion");
		const query = queryString.parse(window.location.search);
		const latestVersion = this.props.changelog[0].version;

		if(lastViewedVersion !== latestVersion || query.change){
			this.setState({
				showChangeLog:true
			});
			localStorage.setItem("LastVersion", latestVersion);
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

		const instructions = engine.compute(this.props.config);

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
			{this.state.showChangeLog && <ChangeLog log={this.props.changelog} close={()=>{this.setState({showChangeLog: false});}} />}
			<InstructionTable 
				instructions={instructions} 
				directionMode ={this.state.directionMode}
				setFrozenImage={(img)=>this.setState({frozenImage: img})}/>
		</>;
	}
}

export default App;
