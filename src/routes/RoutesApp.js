//import router dom
import { Routes, Route } from "react-router-dom";

//import components
import Company from "../pages/Company/Company";
import Employees from "../pages/Employees/Employees";
import Home from "../pages/Home/Home";
import AddPoint from "../pages/Employees/AddPoint/AddPoint";
import SeePoints from "../pages//Employees/SeePoints/SeePoints";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/empresa" element={<Company />} />
			<Route path="/colaboradores" element={<Employees />} />
			<Route path="/colaboradores/adicionarponto/:id" element={<AddPoint />} />
			<Route path="/colaboradores/verpontos/:id" element={<SeePoints />} />
		</Routes>
	);
};

export default RoutesApp;

