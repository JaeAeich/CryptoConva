import { React, useState, useEffect } from "react";

function Form() {
	const url = "https://api.coingecko.com/api/v3/exchange_rates";
	const [data, setData] = useState(null);
	const [coin, setCoin] = useState("Select Coin");
	const [p1, setP1] = useState(1);
	const [p2, setP2] = useState(1);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(Object.entries(data.rates)));
	}, []);
	const handleCoinSelect1 = (e) => {
		e.preventDefault();
		setCoin(e.target.innerText);
		data.forEach((arr) => {
			if (arr[1].name === e.target.innerText) {
				setP1(arr[1].value);
			}
		});
	};

	const handleCoinSelect2 = (e) => {
		data.forEach((arr) => {
			if (arr[1].name === e.target.value) {
				setP2(arr[1].value);
			}
		});
	};

	return (
		data && (
			<form className="container my-3">
				<fieldset disabled="">
					<div className="mb-3">
						<label htmlFor="disabledSelect" className="form-label">
							Choose coin to be converted :
						</label>
					</div>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							aria-label="Text input with dropdown button"
						/>
						<button
							className="btn btn-outline-secondary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{coin}
						</button>
						<ul
							className="dropdown-menu dropdown-menu-end"
							style={{ overflow: "scroll", height: "calc(100vh/2)" }}
						>
							{data.map(([key, value]) => {
								return (
									<li>
										<li
											className="my-3 mx-3"
											style={{ cursor: "pointer" }}
											onClick={(e)=>handleCoinSelect1(e,value.value)}
										>
											{value.name}
										</li>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="mb-3">
						<label htmlFor="disabledSelect" className="form-label">
							Choose coin to be converted to :
						</label>
						<select
							onChange={handleCoinSelect2}
							id="disabledSelect"
							style={{ cursor: "pointer" }}
							className="form-select"
						>
							{data.map(([key, value]) => {
								return (
									<option key={[value.value, value.name]}>{value.name}</option>
								);
							})}
						</select>
					</div>
					<button type="submit" className="btn btn-primary">
						Convert
					</button>
				</fieldset>
			</form>
		)
	);
}

export default Form;
