import ReactDom from "react-dom";
import React from "react";

export class ContactForm extends React.Component {
	render() {
		return (
			<form>
				<div className="row pt-5 pb-2">
					<div className="col form-group text-left">
						<label htmlFor="">Name</label>
						<input className="form-control" type="text" />
						<label htmlFor="">Last Name</label>
						<input className="form-control" type="text" />
						<label htmlFor="">E-mail</label>
						<input className="form-control" type="email" />
						<br />
						<input className="btn btn-info" value="Submit" />
					</div>
				</div>
			</form>
		);
	}
}
