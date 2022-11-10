//import styles
import { ContainerModalEmployees } from "./styles";

//import custom hooks
import { useCompanyContext } from "../../../hooks/useCompanyContext";

//import hooks react
import { useState } from "react";

//import components
import Loading from "../../../components/Loading/Loading";

//import notification - toastify
import { toast } from "react-toastify";

const EmployeesModal = ({ setModalIsVisible, setListEmployees }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [cpfEmployees, setCpfEmployees] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [admissionDate, setAdmissionDate] = useState("");
	const [emailEmployees, setEmailEmployees] = useState("");
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	const { company } = useCompanyContext();

	const handleAddEmployees = async (e) => {
		e.preventDefault();

		setLoadingIsVisible(true);

		const companyToken = company.tokenCompanyForPontoGo;

		const url = `https://pontogo-api.herokuapp.com/register-employees?company-token-pg=${companyToken}`;

		const myHeaders = new Headers();
		myHeaders.append("Authorization", "E09FBC2D-C866-4FEF-94F5-CD5738418454");

		const raw = {
			disableMandril: true,
			employees: [
				{
					email: emailEmployees,
					cpf: cpfEmployees,
					firstName: firstName,
					lastName: lastName,
					admissionDate: new Date(admissionDate).toISOString(),
					birthdate: new Date(birthdate).toISOString(),
					registration: "000000001",
					pis: null,
					pointWithPicture: false,
					companyAdmissionDate: "2022-10-20T00:00:00.000Z",
					clt: true,
				},
			],
		};

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify(raw),
			redirect: "follow",
		};

		const res = await fetch(url, requestOptions);
		const data = await res.json();

		setListEmployees((prev) => [...prev, data.employees[0]]);

		setModalIsVisible(false);
		setLoadingIsVisible(false);

		toast.success(
			`Colaborador(a) ${data.employees[0].firstName} ${data.employees[0].lastName} salvo com sucesso.`
		);
	};

	return (
		<ContainerModalEmployees>
			{loadingIsVisible && <Loading />}

			<div className="limit-modal">
				<div className="modal-square">
					<div className="container-title-form">
						<h1>Cadastrar colaborador</h1>
					</div>

					<div className="container-body-form">
						<form onSubmit={handleAddEmployees}>
							<label className="label-row">
								<span className="title-form">Primeiro Nome:</span>
								<input
									className="input-form-employees"
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Digite o primeiro nome do colaborador..."
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
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
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
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
									value={cpfEmployees}
									onChange={(e) => setCpfEmployees(e.target.value)}
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Data de nascimento:</span>
								<input
									className="input-form-employees"
									type="date"
									name="birthdate"
									id="birthdate"
									value={birthdate}
									onChange={(e) => setBirthdate(e.target.value)}
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Data admissão:</span>
								<input
									className="input-form-employees"
									type="date"
									name="admissionDate"
									id="admissionDate"
									value={admissionDate}
									onChange={(e) => setAdmissionDate(e.target.value)}
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
									value={emailEmployees}
									onChange={(e) => setEmailEmployees(e.target.value)}
								/>
							</label>

							<div className="row-btn">
								<button className="btn-save" type="submit">
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

