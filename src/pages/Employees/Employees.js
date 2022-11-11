//import styles
import { ContainerContent } from "./styles";

//import components
import SideBar from "../../components/SideBar/SideBar";
import EmployeesSquare from "../Employees/EmployeesSquare/EmployeesSquare";
import MenuBurger from "../../components/MenuBurger/MenuBurger";

const Employees = () => {
	return (
		<div>
			<MenuBurger />
			<SideBar />
			<ContainerContent>
				<EmployeesSquare />
			</ContainerContent>
		</div>
	);
};

export default Employees;

