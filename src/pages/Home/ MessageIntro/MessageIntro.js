//import assets
import logo from "../../../assets/images/logo.png";

//import styles
import { ContainerSquareHome } from "./styles";

const MessageIntro = () => {
	return (
		<ContainerSquareHome>
			<div className="header-content">
				<img src={logo} alt="logo" />
				<h1>Início da aplicação!</h1>
			</div>

			<div className="message-content">
				<p className="text-bold">Olá! Seja bem-vindo! </p>

				<p>
					A presente aplicação web corresponde ao teste técnico para a empresa
					PontoGo e o mesmo foi desenvolvido pelo candidato
					<strong> Rodrigo Medeiros</strong>. Navegue pelo menu lateral para
					realizar as seguintes funções:
				</p>

				<ul>
					<li>Criar uma nova empresa.</li>
					<li>Criar um novo colaborador para a respectiva empresa.</li>
					<li>
						Bater um ponto no horário de 15:00 no dia 26/10/2022 para o
						respectivo colaborador.
					</li>
					<li>Pegar os pontos batidos do dia 26/10/2022.</li>
				</ul>
			</div>
		</ContainerSquareHome>
	);
};

export default MessageIntro;

