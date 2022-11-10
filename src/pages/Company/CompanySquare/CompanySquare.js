//import styles
import { ContainerSquare } from "./styles";

//import icons
import { BsBuilding } from "react-icons/bs";

//import hooks react
import { useState, useEffect } from "react";

//import customhook
import { useCompanyContext } from "../../../hooks/useCompanyContext";

//import components
import ModalCompany from "../ModalCompany/ModalCompany";
import ButtonAdd from "../../../components/ButtonAdd/ButtonAdd";

const CompanySquare = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [nameCompany, setNameCompany] = useState("");
	const [cnpjCompany, setCnpjCompany] = useState("");
	const { company } = useCompanyContext();

	useEffect(() => {
		if (company) {
			setNameCompany(company.nameCompany);
			setCnpjCompany(company.cnpjCompany);
		}
	}, [company]);

	return (
		<ContainerSquare>
			<div className="title-container">
				<BsBuilding className="icons" />
				<h1>Registrar empresa</h1>
			</div>
			<ButtonAdd
				setModalIsVisible={setModalIsVisible}
				message={"Clique no botão para adicionar uma nova empresa."}
				textBtn={"Adicionar nova empresa"}
			/>
			<div className="container-content">
				<h2>Empresa cadastrada:</h2>
				<ul>
					{nameCompany && cnpjCompany ? (
						<li>
							<span className="name-company">{nameCompany}</span>
							<span className="cnpj-company">
								CNPJ:{" "}
								{cnpjCompany.replace(
									/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
									"$1.$2.$3/$4-$5"
								)}
							</span>
						</li>
					) : (
						<p>Nenhuma empresa cadastrada.</p>
					)}
				</ul>
			</div>

			{modalIsVisible && (
				<ModalCompany
					setModalIsVisible={setModalIsVisible}
					setNameCompany={setNameCompany}
					setCnpjCompany={setCnpjCompany}
				/>
			)}
		</ContainerSquare>
	);
};

export default CompanySquare;

