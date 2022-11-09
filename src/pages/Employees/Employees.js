//import styles
import { ContainerContent } from "./styles";

//import components
import SideBar from "../../components/SideBar/SideBar";
import EmployeesSquare from "../Employees/EmployeesSquare/EmployeesSquare";

const Employees = () => {
	return (
		<div>
			<SideBar />
			<ContainerContent>
				<EmployeesSquare />
			</ContainerContent>
		</div>
	);
};

export default Employees;

