//import components
import SideBar from "../../components/SideBar/SideBar";
import CompanySquare from "./CompanySquare/CompanySquare";

//import styles
import { ContainerContent } from "./styles";

const Company = () => {
	return (
		<div>
			<SideBar />
			<ContainerContent>
				<CompanySquare />
			</ContainerContent>
		</div>
	);
};

export default Company;

