//import router dom
import { Routes, Route } from "react-router-dom";

//import components
import Company from "../pages/Company/Company";
import Employees from "../pages/Employees/Employees";
import Home from "../pages/Home/Home";
import AddPoint from "../pages/AddPoint/AddPoint";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/empresa" element={<Company />} />
			<Route path="/colaboradores" element={<Employees />} />
			<Route path="/adicionarponto" element={<AddPoint />} />
		</Routes>
	);
};

export default RoutesApp;

