//import router dom
import { Routes, Route } from "react-router-dom";

//import components
import Company from "../pages/Company/Company";
import Employees from "../pages/Employees/Employees";
import Home from "../pages/Home/Home";
import AddPoint from "../pages/AddPoint/AddPoint";
import SeePoints from "../pages/SeePoints/SeePoints";

import MenuBurger from "../components/MenuBurger/MenuBurger";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/empresa" element={<Company />} />
			<Route path="/colaboradores" element={<Employees />} />
			<Route path="/adicionarponto" element={<AddPoint />} />
			<Route path="/adicionarponto/:id" element={<AddPoint />} />
			<Route path="/verpontos/:id" element={<SeePoints />} />

			<Route path="/menu" element={<MenuBurger />} />
		</Routes>
	);
};

export default RoutesApp;

