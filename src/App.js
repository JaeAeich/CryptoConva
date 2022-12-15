import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Credit from "./components/Credit";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Ans from "./components/Ans";
import About from "./components/About";
import Error from "./components/Error";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							<Form /> <Ans />
						</>
					}
				/>
				<Route path="/credit" element={<Credit />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
