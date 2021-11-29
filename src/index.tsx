import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./RouteApp";
import {MainRoute} from "./route/config";

ReactDOM.render(
	<React.StrictMode>
		<App config={MainRoute}/>
	</React.StrictMode>,
	document.getElementById("root")
);

