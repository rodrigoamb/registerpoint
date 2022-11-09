//import router dom
import { Routes, Route } from "react-router-dom";

//import components
import Company from "../pages/Company/Company";
import Home from "../pages/Home/Home";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/company" element={<Company />} />
		</Routes>
	);
};

export default RoutesApp;

