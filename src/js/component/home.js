import React from "react";
import { Nav } from "./Nav"; //Nav's file uses "export class Nav extends React.Component", so we need the "{}"
import Jumbotron from "./Jumbotron"; //Jumbotron's file uses "export default class Jumbotron extends React.Component", so we don't need the "{ }"
import Cards from "./cards";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Nav />
				<Jumbotron />
				<Cards />
			</div>
		);
	}
}
