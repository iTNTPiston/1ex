import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./RouteApp";
import {mainConfig} from "./route/config";

ReactDOM.render(
	<React.StrictMode>
		<App config={mainConfig}/>
	</React.StrictMode>,
	document.getElementById("root")
);

