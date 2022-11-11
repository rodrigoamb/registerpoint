//impoty styles
import { ContainerHome, ContainerContent } from "./styles";

//import components
import SideBar from "../../components/SideBar/SideBar";
import MessageIntro from "./ MessageIntro/MessageIntro";
import MenuBurger from "../../components/MenuBurger/MenuBurger";

const Home = () => {
	return (
		<ContainerHome>
			<MenuBurger />
			<SideBar />
			<ContainerContent>
				<MessageIntro />
			</ContainerContent>
		</ContainerHome>
	);
};

export default Home;

