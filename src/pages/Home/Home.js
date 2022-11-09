//impoty styles
import { ContainerHome, ContainerContent } from "./styles";

//import components
import SideBar from "../../components/SideBar/SideBar";
import MessageIntro from "./ MessageIntro/MessageIntro";

const Home = () => {
	return (
		<ContainerHome>
			<SideBar />
			<ContainerContent>
				<MessageIntro />
			</ContainerContent>
		</ContainerHome>
	);
};

export default Home;

