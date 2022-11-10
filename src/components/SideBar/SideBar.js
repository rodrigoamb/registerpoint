//import styles
import { ContainerSideBar } from "./styles";

//import router dom
import { Link } from "react-router-dom";

//import assets
import logo from "../../assets/images/logo.png";

//import icons
import { BsBuilding, BsFillPeopleFill } from "react-icons/bs";

const SideBar = () => {
	return (
		<ContainerSideBar>
			<Link to="/">
				<img className="img" src={logo} alt="logo" />
			</Link>

			<Link to="/empresa" className="btn">
				<BsBuilding className="icons" />
				Perfil Empresa
			</Link>

			<Link to="/colaboradores" className="btn">
				<BsFillPeopleFill className="icons" />
				Colaboradores
			</Link>
		</ContainerSideBar>
	);
};

export default SideBar;

