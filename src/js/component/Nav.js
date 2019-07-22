import React from "react";

//create your first component
export class Nav extends React.Component {
	render() {
		return (
			<nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div className="navbar-nav ml-auto">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						About
					</a>
					<a className="nav-item nav-link" href="#">
						Services
					</a>
					<a className="nav-item nav-link disabled" href="#">
						Contact
					</a>
				</div>
			</nav>
		);
	}
}
