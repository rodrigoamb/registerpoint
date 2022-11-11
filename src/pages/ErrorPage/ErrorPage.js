//import logo
import { Link } from "react-router-dom";

//import assets
import logo from "../../assets/images/logo.png";

//import styles
import { ContainerErrorPage } from "./styles";

const ErrorPage = () => {
	return (
		<ContainerErrorPage>
			<img src={logo} alt="logo" />

			<div>Página não encontrada!</div>

			<Link to="/" className="btn">
				Página inicial
			</Link>
		</ContainerErrorPage>
	);
};

export default ErrorPage;

