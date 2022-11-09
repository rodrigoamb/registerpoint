//import styles
import { ContainerSquare } from "./styles";

//import icons
import { BsBuilding } from "react-icons/bs";

//import hooks
import { useState } from "react";

//import components
import ModalCompany from "../ModalCompany/ModalCompany";
import ButtonAdd from "../../../components/ButtonAdd/ButtonAdd";

const CompanySquare = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	return (
		<ContainerSquare>
			<div className="title-container">
				<BsBuilding className="icons" />
				<h1>Registrar empresa</h1>
			</div>
			<ButtonAdd
				setModalIsVisible={setModalIsVisible}
				message={"Clique no botão ao lado para dicionar uma nova empresa."}
				textBtn={"Adicionar nova empresa"}
			/>
			<div className="container-content">
				<h2>Empresas cadastradas</h2>
				<ul>
					<li>Empresa 01</li>
					<li>Empresa 02</li>
					<li>Empresa 03</li>
					<li>Empresa 04</li>
				</ul>
			</div>
			{modalIsVisible && <ModalCompany setModalIsVisible={setModalIsVisible} />}
		</ContainerSquare>
	);
};

export default CompanySquare;

