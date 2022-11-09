//import styles
import { ContainerSideBar } from "./styles";

//import router dom
import { Link } from "react-router-dom";

//import assets
import logo from "../../assets/images/logo.png";

//import icons
import { BsBuilding, BsFillPeopleFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

const SideBar = () => {
	return (
		<ContainerSideBar>
			<Link to="/">
				<img className="img" src={logo} alt="logo" />
			</Link>

			<Link to="/company" className="btn">
				<BsBuilding className="icons" />
				Perfil Empresa
			</Link>

			<Link to="/employees" className="btn">
				<BsFillPeopleFill className="icons" />
				Colaboradores
			</Link>

			<Link to="/addpoint" className="btn">
				<BiTime className="icons" />
				Registrar ponto
			</Link>
		</ContainerSideBar>
	);
};

export default SideBar;

