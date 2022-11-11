//import components
import SideBar from "../../components/SideBar/SideBar";
import CompanySquare from "./CompanySquare/CompanySquare";
import MenuBurger from "../../components/MenuBurger/MenuBurger";

//import styles
import { ContainerContent } from "./styles";

const Company = () => {
	return (
		<div>
			<MenuBurger />
			<SideBar />
			<ContainerContent>
				<CompanySquare />
			</ContainerContent>
		</div>
	);
};

export default Company;

