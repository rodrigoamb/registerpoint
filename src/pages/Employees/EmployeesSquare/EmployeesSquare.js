//import styles
import { ContainerSquare } from "./styles";

//import icons
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";
import { BiTime } from "react-icons/bi";

//import hooks
import { useState, useEffect } from "react";

//import custom hook
import { useCompanyContext } from "../../../hooks/useCompanyContext";

import ButtonAdd from "../../../components/ButtonAdd/ButtonAdd";
import EmployeesModal from "../EmployeesModal/EmployeesModal";
import Loading from "../../../components/Loading/Loading";

//import react-router-dom
import { Link } from "react-router-dom";

const EmployeesSquare = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [listEmployees, setListEmployees] = useState([]);
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	const { company } = useCompanyContext();

	useEffect(() => {
		if (company) {
			const getEmployees = async () => {
				setLoadingIsVisible(true);

				const companyToken = company.tokenCompanyForPontoGo;

				const url = `https://pontogo-api.herokuapp.com/get-employees?company-token-pg=${companyToken}`;

				const myHeaders = new Headers();
				myHeaders.append(
					"Authorization",
					"E09FBC2D-C866-4FEF-94F5-CD5738418454"
				);

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow",
				};

				const res = await fetch(url, requestOptions);
				const data = await res.json();

				setListEmployees(data);
				setLoadingIsVisible(false);
			};

			getEmployees();
		}
	}, [company]);

	return (
		<ContainerSquare>
			{loadingIsVisible && <Loading />}

			<div className="title-container">
				<BsFillPeopleFill className="icons" />
				<h1>Registrar colaboradores</h1>
			</div>
			<ButtonAdd
				setModalIsVisible={setModalIsVisible}
				message={"Clique no botão para adicionar um novo colaborador"}
				textBtn={"Adicionar novo colaborador"}
			/>
			<div className="container-content">
				<h2>Colaboradores cadastrados:</h2>
				<ul>
					{listEmployees.length > 0 ? (
						listEmployees.map((item, index) => (
							<li key={index}>
								<Link
									to={`/verpontos/${item.id}+${item.firstName}+${item.lastName}`}
								>
									<IoIosEye className="iconEye" />
								</Link>

								<Link
									to={`/adicionarponto/${item.id}+${item.firstName}+${item.lastName}`}
								>
									<BiTime className="iconTime" />
								</Link>

								<span>{item.name}</span>
							</li>
						))
					) : (
						<p>Nenhum colaborador cadastrado.</p>
					)}
				</ul>
			</div>
			{modalIsVisible && (
				<EmployeesModal
					setModalIsVisible={setModalIsVisible}
					setListEmployees={setListEmployees}
				/>
			)}
		</ContainerSquare>
	);
};

export default EmployeesSquare;

