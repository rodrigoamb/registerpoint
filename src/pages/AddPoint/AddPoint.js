//import styles
import { ContainerContent } from "./styles";

//import components
import SideBar from "../../components/SideBar/SideBar";

//import icons
import { BiTime } from "react-icons/bi";

const AddPoint = () => {
	return (
		<div>
			<SideBar />
			<ContainerContent>
				<div className="title-container">
					<BiTime className="icons" />
					<h1>Registrar ponto</h1>
				</div>
				<div className="container-content">
					<h2>Adicionar ponto:</h2>
					<form>
						<label className="label-row">
							<span>Selecione o colaborador:</span>
							<select
								className="select-employees"
								name="selectEmployees"
								id="selectEmployees"
							>
								<option value="">Selecione um colaborador</option>
								<option value="01">Colaborador 01</option>
								<option value="02">Colaborador 02</option>
								<option value="03">Colaborador 03</option>
								<option value="04">Colaborador 04</option>
							</select>
						</label>
						<label className="label-row">
							<span>Escolha o dia e a hora do ponto:</span>
							<input type="datetime-local" />
						</label>
						<div>
							<button className="btn-point">Adicionar</button>
							<p className="message-add-point">Ponto adicionado com sucesso!</p>
						</div>
					</form>
				</div>
			</ContainerContent>
		</div>
	);
};

export default AddPoint;

