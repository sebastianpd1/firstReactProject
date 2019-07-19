import React from "react";
import { Nav } from "./Nav"; //Nav's file uses "export class Nav extends React.Component", so we need the "{}"
import Jumbotron from "./Jumbotron"; //Jumbotron's file uses "export default class Jumbotron extends React.Component", so we don't need the "{ }"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>
					This is the Home Page, and and we are importing other files
					to organize our content.
				</h1>
				<h2>Below we are using the Nav Info file with</h2>
				<Nav />
				<h2>Below we are using the Jumbotron file:</h2>
				<Jumbotron />
				<h2>
					Next step is to duplicate a file in the component folder,
					such as Nav, and update the export inormation (think in
					terms of what you want that collection of information to be
					referred to when it is needed)
				</h2>
			</div>
		);
	}
}
