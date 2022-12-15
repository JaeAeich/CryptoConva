import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Error() {
	const [isVis, setIsVis] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsVis(false);
		}, 3000);
	}, []);

	return (
		<div className="">
			{isVis && (
				<div
					class="position-absolute top-30 start-50 translate-middle"
					style={{ zIndex: "1" }}
				>
					<div class="alert alert-danger my-3 container" role="alert">
						404 Error! page Not Found, Go back to{" "}
						<Link to="/" class="alert-link">
							Home
						</Link>
					</div>
				</div>
			)}
			<img
				src="https://cdn.dribbble.com/users/77598/screenshots/6321675/desert-page_dribbble.gif"
				style={{
					top: "0",
					right: "0",
					bottom: "0",
					left: "0",
					width: "100%",
					height: "100vh",
					position: "relative",
					zIndex: "0",
				}}
			/>
		</div>
	);
}

export default Error;
