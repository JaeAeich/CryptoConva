import React from "react";

function Ans(props) {
	return (
		props.ans &&
		<figure className="text-center container">
			<blockquote className="blockquote my-3">
				<p>
					{props.amt} {props.coin} converted to {props.coin2} :
				</p>
			</blockquote>
			<p>
				<strong>{props.ans}</strong>
			</p>
		</figure>
	);
}

export default Ans;
