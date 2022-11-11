import { ContainerSlideBar } from "./styles";

//import icons
import { MdClose } from "react-icons/md";
import { BsBuilding, BsFillPeopleFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

const SlideBar = ({ setMenuIsVisible, menuIsVisible }) => {
	return (
		<ContainerSlideBar menuIsVisibles={menuIsVisible}>
			<div className="navbar-container">
				<MdClose
					className="icon-close"
					onClick={() => setMenuIsVisible(false)}
				/>

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
			</div>
		</ContainerSlideBar>
	);
};

export default SlideBar;

