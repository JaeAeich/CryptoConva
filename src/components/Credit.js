import React from "react";
import { Link } from "react-router-dom";

function Credit() {
	return (
		<div className="card container my-3" style={{ width: "18rem" }}>
			<div className="card-body">
				<img style={{ width: "100%" }} className="my-3" src="pic.png"></img>
				<h5 className="card-title">Javed Habib</h5>
				<p className="card-text">
					Hey there! I'm Javed, a coding enthusiast and aspiring MERN Stack
					developer currently persuing CS degree (grad. at year '25) at IIT
					bh(Indian Institute of technology).
				</p>
			</div>
			<i class="fab fa-reddit"></i>

			<ul className="list-group list-group-flush">
				<a
					className="list-group-item mx-1"
					href="https://github.com/JaeAeich"
					target="_blank"
				>
					<i class="bi bi-github mx-1"></i>
					Connect to me on Github!
				</a>
				<Link className="list-group-item " to="/home">
					<i class="bi bi-instagram mx-1"></i>
					Connect to me on Instagram!
				</Link>
			</ul>
		</div>
	);
}

export default Credit;
