//import styles
import { ContainerContent } from "./styles";

//import react-router-dom
import { Link, useParams } from "react-router-dom";

//import notification - toastify
import { toast } from "react-toastify";

//import icons
import { IoIosEye } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";

//import components
import SideBar from "../../../components/SideBar/SideBar";
import Loading from "../../../components/Loading/Loading";
import MenuBurger from "../../../components/MenuBurger/MenuBurger";

//import custom hook
import { useCompanyContext } from "../../../hooks/useCompanyContext";

//import hooks react
import { useEffect, useState } from "react";

const SeePoints = () => {
	const { id } = useParams();
	const { company } = useCompanyContext();

	const [firstNameEmployees, setFirstNameEmployees] = useState("");
	const [lastNameEmployees, setLastNameEmployees] = useState("");
	const [idEmployees, setIdEmployees] = useState("");
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);
	const [initialDate, setInitialDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [listPointData, setListPointData] = useState([]);

	useEffect(() => {
		if (id) {
			setIdEmployees(id.split("+")[0]);
			setFirstNameEmployees(id.split("+")[1]);
			setLastNameEmployees(id.split("+")[2]);
		}
	}, [id]);

	const handlePullPoints = async (e) => {
		e.preventDefault();

		if (!initialDate || !endDate) {
			toast.warn(`As duas datas deve ser escolhida.`);
			return;
		}

		try {
			setLoadingIsVisible(true);

			const companyToken = company.tokenCompanyForPontoGo;
			const employeesToken = idEmployees;
			const formatedInitialDate = initialDate.split("-").reverse().join("/");
			const formatedEndDate = endDate.split("-").reverse().join("/");

			const url = `https://pontogo-api.herokuapp.com/get-points?initialDate=${formatedInitialDate}&endDate=${formatedEndDate}&company-token-pg=${companyToken}&employee-token-pg=${employeesToken}`;

			const myHeaders = new Headers();
			myHeaders.append("Authorization", "E09FBC2D-C866-4FEF-94F5-CD5738418454");

			const requestOptions = {
				method: "GET",
				headers: myHeaders,
				redirect: "follow",
			};

			const res = await fetch(url, requestOptions);
			const data = await res.json();

			setListPointData(data);

			setInitialDate("");
			setEndDate("");

			setLoadingIsVisible(false);

			toast.success("Busca concluída com sucesso!");
		} catch (err) {
			toast.warn(`Aconteceu um erro ao buscar os pontos: ${err}`);
		}
	};

	return (
		<div>
			<MenuBurger />

			<SideBar />

			<ContainerContent>
				{loadingIsVisible && <Loading />}

				<div className="title-container">
					<IoIosEye className="icons" />

					<h1>Ver pontos registrados</h1>
				</div>

				<div className="row-arrow">
					<Link to="/colaboradores">
						<BiArrowBack className="icon-arrow" />
					</Link>

					<span>Voltar para colaboradores</span>
				</div>

				<div className="container-content">
					<h2>Lista de pontos:</h2>

					<form onSubmit={handlePullPoints}>
						<label className="label-row">
							<span>Colaborador:</span>

							<span className="name-employees">
								{firstNameEmployees} {lastNameEmployees}
							</span>
						</label>

						<label className="label-row">
							<span>Escolha a data inicial do ponto:</span>

							<input
								type="date"
								value={initialDate}
								onChange={(e) => setInitialDate(e.target.value)}
							/>
						</label>

						<label className="label-row">
							<span>Escolha a data final do ponto:</span>

							<input
								type="date"
								value={endDate}
								onChange={(e) => setEndDate(e.target.value)}
							/>
						</label>

						<div>
							<button type="submit" className="btn-point">
								Burcar ponto
							</button>
						</div>
					</form>

					<div>
						<ul>
							{listPointData.length > 0 ? (
								listPointData.map((item) => (
									<li className="list-points" key={item.id}>{`${new Date(
										item.date
									)}`}</li>
								))
							) : (
								<li className="message-point">Nenhum ponto para exibir.</li>
							)}
						</ul>
					</div>
				</div>
			</ContainerContent>
		</div>
	);
};

export default SeePoints;

