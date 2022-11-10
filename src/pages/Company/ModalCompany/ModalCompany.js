//import styles
import { ContainerModalCompany } from "./styles";

//import hooks
import { useState } from "react";

//import custom hooks
import { useCompanyContext } from "../../../hooks/useCompanyContext";

//import components
import Loading from "../../../components/Loading/Loading";

//import notification - toastify
import { toast } from "react-toastify";

const ModalCompany = ({
	setModalIsVisible,
	setNameCompany,
	setCnpjCompany,
}) => {
	const [socialName, setSocialName] = useState("");
	const [fantasyName, setFantasyName] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [phoneCompany, setPhoneCompany] = useState("");
	const [emailCompany, setEmailCompany] = useState("");
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	const { setCompany } = useCompanyContext();

	const handleSaveCompany = async (e) => {
		e.preventDefault();

		setLoadingIsVisible(true);

		const url = "https://pontogo-api.herokuapp.com/register-company";

		const myHeaders = new Headers();
		myHeaders.append("Authorization", "E09FBC2D-C866-4FEF-94F5-CD5738418454");

		const raw = {
			name: fantasyName,
			phone: phoneCompany,
			email: emailCompany,
			cnpj: cnpj,
			razaoSocial: socialName,
		};

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify(raw),
			redirect: "follow",
		};

		const res = await fetch(url, requestOptions);
		const data = await res.json();

		const dataCompany = {
			...data,
			...{ nameCompany: socialName, cnpjCompany: cnpj },
		};

		setCompany(dataCompany);

		setNameCompany(socialName);
		setCnpjCompany(cnpj);

		setModalIsVisible(false);

		setLoadingIsVisible(false);
		toast.success("Empresa salvo com sucesso.");
	};

	return (
		<ContainerModalCompany>
			{loadingIsVisible && <Loading />}

			<div className="limit-modal">
				<div className="modal-square">
					<div className="container-title-form">
						<h1>Cadastrar Empresa</h1>
					</div>

					<div className="container-body-form">
						<form onSubmit={handleSaveCompany}>
							<label className="label-row">
								<span className="title-form">Razão Social:</span>
								<input
									className="input-form-company"
									type="text"
									name="name"
									id="name"
									placeholder="Digite a razão social da empresa..."
									value={socialName}
									onChange={(e) => setSocialName(e.target.value)}
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Nome Fantasia:</span>
								<input
									className="input-form-company"
									type="text"
									name="name"
									id="name"
									placeholder="Digite o nome fantasia da empresa..."
									value={fantasyName}
									onChange={(e) => setFantasyName(e.target.value)}
								/>
							</label>

							<label className="label-row">
								<span className="title-form">CNPJ: (apenas números)</span>
								<input
									className="input-form-company"
									type="number"
									name="cnpj"
									id="cnpj"
									placeholder="xxxxxxxxxxxxxxx"
									value={cnpj}
									onChange={(e) => setCnpj(e.target.value)}
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Telefone com DDD:</span>
								<input
									className="input-form-company"
									type="number"
									name="phone"
									id="phone"
									placeholder="859xxxxxxxx"
									value={phoneCompany}
									onChange={(e) => setPhoneCompany(e.target.value)}
								/>
							</label>

							<label className="label-row">
								<span className="title-form">Email:</span>
								<input
									className="input-form-company"
									type="email"
									name="email"
									id="email"
									placeholder="emaildaempresa@email.com"
									value={emailCompany}
									onChange={(e) => setEmailCompany(e.target.value)}
								/>
							</label>

							<div className="row-btn">
								<button className="btn-save" type="onSubmit">
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
		</ContainerModalCompany>
	);
};

export default ModalCompany;

