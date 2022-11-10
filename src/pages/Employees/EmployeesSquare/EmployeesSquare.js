//import styles
import { ContainerSquare } from "./styles";

//import icons
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";

//import hooks
import { useState } from "react";

import ButtonAdd from "../../../components/ButtonAdd/ButtonAdd";
import EmployeesModal from "../EmployeesModal/EmployeesModal";

const EmployeesSquare = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [dataEmployees, setDataEmployees] = useState(null);

	console.log(dataEmployees);

	return (
		<ContainerSquare>
			<div className="title-container">
				<BsFillPeopleFill className="icons" />
				<h1>Registrar colaboradores</h1>
			</div>
			<ButtonAdd
				setModalIsVisible={setModalIsVisible}
				message={"Clique no botão ao lado para adicionar um novo colaborador"}
				textBtn={"Adicionar novo colaborador"}
			/>
			<div className="container-content">
				<h2>Colaboradores cadastrados:</h2>
				<ul>
					{dataEmployees &&
						dataEmployees.map((item) => (
							<li key={item.id}>
								<IoIosEye className="iconEye" />
								<span>{item.name}</span>
							</li>
						))}
				</ul>
			</div>
			{modalIsVisible && (
				<EmployeesModal
					setModalIsVisible={setModalIsVisible}
					setDataEmployees={setDataEmployees}
				/>
			)}
		</ContainerSquare>
	);
};

export default EmployeesSquare;

