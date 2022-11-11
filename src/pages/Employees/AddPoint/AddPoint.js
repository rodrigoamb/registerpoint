//import styles
import { ContainerContent } from "./styles";

//import components
import SideBar from "../../../components/SideBar/SideBar";
import Loading from "../../../components/Loading/Loading";

//import icons
import { BiTime } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";

//import react-router-dom
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//import custom hooks
import { useCompanyContext } from "../../../hooks/useCompanyContext";

//import notification - toastify
import { toast } from "react-toastify";
import MenuBurger from "../../../components/MenuBurger/MenuBurger";

const AddPoint = () => {
	const { id } = useParams();

	const [firstNameEmployees, setFirstNameEmployees] = useState("");
	const [idEmployees, setIdEmployees] = useState("");
	const [datePoint, setDatePoint] = useState("");
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	const { company } = useCompanyContext();

	useEffect(() => {
		if (id) {
			setIdEmployees(id.split("+")[0]);
			setFirstNameEmployees(id.split("+")[1]);
		}
	}, [id]);

	const handleAddPoint = async (e) => {
		e.preventDefault();

		if (!datePoint) {
			toast.warn("Preencha o campo da data para registrar o ponto.");
			return;
		}

		try {
			setLoadingIsVisible(true);

			const companyToken = company.tokenCompanyForPontoGo;
			const employeesToken = idEmployees;

			const url = `https://pontogo-api.herokuapp.com/add-point?company-token-pg=${companyToken}&employee-token-pg=${employeesToken}`;

			const myHeaders = new Headers();
			myHeaders.append("Authorization", "E09FBC2D-C866-4FEF-94F5-CD5738418454");

			const raw = {
				date: new Date(datePoint).toISOString(),
				latitude: null,
				longitude: null,
				userData: {
					device: "iPhone 14",
					gatewayMac: null,
					ip: "192.168.12.13",
					operatingSystem: "iOS",
				},
			};

			const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify(raw),
				redirect: "follow",
			};

			const res = await fetch(url, requestOptions);
			const data = await res.json();

			setDatePoint("");

			setLoadingIsVisible(false);

			toast.success(
				`Ponto registrado com sucesso. Ponto em: ${new Date(data.date)}`
			);
		} catch (error) {
			toast.warn(`erro: ${error}`);
		}
	};

	return (
		<div>
			<MenuBurger />
			<SideBar />
			<ContainerContent>
				{loadingIsVisible && <Loading />}
				<div className="title-container">
					<BiTime className="icons" />

					<h1>Registrar ponto</h1>
				</div>
				<div className="row-arrow">
					<Link to="/colaboradores">
						<BiArrowBack className="icon-arrow" />
					</Link>

					<span>Voltar para colaboradores</span>
				</div>
				<div className="container-content">
					<h2>Adicionar ponto:</h2>

					<form onSubmit={handleAddPoint}>
						<label className="label-row">
							<span>Colaborador:</span>

							<span className="name-employees">{firstNameEmployees}</span>
						</label>
						<label className="label-row">
							<span>Escolha o dia e a hora do ponto:</span>

							<input
								type="datetime-local"
								value={datePoint}
								onChange={(e) => setDatePoint(e.target.value)}
							/>
						</label>

						<div>
							<button type="submit" className="btn-point">
								Adicionar ponto
							</button>
						</div>
					</form>
				</div>
			</ContainerContent>
		</div>
	);
};

export default AddPoint;

