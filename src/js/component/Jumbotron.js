import React from "react";

//create your first component
export default class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4 text-white">Hello, world!</h1>
				<hr className="my-4" />
				<p className="text-white">
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
				<p className="lead text-white">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
			</div>
		);
	}
}
