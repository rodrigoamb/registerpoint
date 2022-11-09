import { ContainerModalCompany } from "./styles";

const ModalCompany = ({ setModalIsVisible }) => {
	return (
		<ContainerModalCompany>
			<div className="limit-modal">
				<div className="modal-square">
					<div className="container-title-form">
						<h1>Cadastrar Empresa</h1>
					</div>

					<div className="container-body-form">
						<form>
							<label className="label-row">
								<span className="title-form">Razão Social:</span>
								<input
									className="input-form-company"
									type="text"
									name="name"
									id="name"
									placeholder="Digite a razão social da empresa..."
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
								/>
							</label>

							<label className="label-row">
								<span className="title-form">CNPJ:</span>
								<input
									className="input-form-company"
									type="number"
									name="cnpj"
									id="cnpj"
									placeholder="xxx.xxx.xxx/xxxx-xx"
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
		</ContainerModalCompany>
	);
};

export default ModalCompany;

