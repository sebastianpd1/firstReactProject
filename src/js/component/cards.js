import React from "react";

//create your first component
export class Card extends React.Component {
	render() {
		let cardsObj = [
			{
				title: "Title1",
				desc: "desc2",
				img: "http://lorempixel.com/400/400/sports/"
			},
			{
				title: "Title1",
				desc: "desc2",
				img: "http://lorempixel.com/400/400/sports/"
			},
			{
				title: "Title1",
				desc: "desc2",
				img: "http://lorempixel.com/400/400/sports/"
			},
			{
				title: "Title1",
				desc: "desc2",
				img: "http://lorempixel.com/400/400/sports/"
			}
		];

		let cards = cardsObj.map((e, i) => {
			return (
				<div className="card" key={i}>
					<img
						className="card-img-top"
						src={e.img}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{e.title}</h5>
						<p className="card-text">{e.desc}</p>
						<p className="card-text">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
			);
		});

		return <div className="card-deck">{cards}</div>;
	}
}
