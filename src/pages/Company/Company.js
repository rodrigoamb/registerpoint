import SideBar from "../../components/SideBar/SideBar";
import CompanySquare from "./CompanySquare/CompanySquare";

import { ContainerCompany, ContainerContent } from "./styles";

const Company = () => {
	return (
		<ContainerCompany>
			<SideBar />
			<ContainerContent>
				<CompanySquare />
			</ContainerContent>
		</ContainerCompany>
	);
};

export default Company;

