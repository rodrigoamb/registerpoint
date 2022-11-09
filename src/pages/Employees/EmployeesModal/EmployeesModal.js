import { ContainerModalEmployees } from "./styles";

const EmployeesModal = ({ setModalIsVisible }) => {
	return (
		<ContainerModalEmployees>
			<div className="limit-modal">
				<div className="modal-square">
					<div className="container-title-form">
						<h1>Cadastrar colaborador</h1>
					</div>

					<div className="container-body-form">
						<form>
							<label className="label-row">
								<span className="title-form">Primeiro Nome:</span>
								<input
									className="input-form-employees"
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Digite o primeiro nome do colaborador..."
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Sobrenome:</span>
								<input
									className="input-form-employees"
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Digite o sobrenome no colaborador..."
								/>
							</label>

							<label className="label-row">
								<span className="title-form">CPF:</span>
								<input
									className="input-form-employees"
									type="number"
									name="cpf"
									id="cpf"
									placeholder="xxxxxxxxxxx"
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Data de nascimento:</span>
								<input
									className="input-form-employees"
									type="date"
									name="birthdate"
									id="birthdate"
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Data admissão:</span>
								<input
									className="input-form-employees"
									type="date"
									name="admissionDate"
									id="admissionDate"
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Email:</span>
								<input
									className="input-form-employees"
									type="email"
									name="email"
									id="email"
									placeholder="emaildocolaborador@email.com"
								/>
							</label>

							<div className="row-btn">
								<button
									className="btn-save"
									onClick={() => alert("salvou dados")}
								>
									Salvar
								</button>
								<button
									className="btn-cancel"
									onClick={() => setModalIsVisible(false)}
								>
									Cancelar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</ContainerModalEmployees>
	);
};

export default EmployeesModal;

