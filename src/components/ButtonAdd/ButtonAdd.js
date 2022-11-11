import { ContainerButtonAdd } from "./styles";

const ButtonAdd = ({ setModalIsVisible, message, textBtn }) => {
	return (
		<ContainerButtonAdd>
			<p>{message}</p>

			<button type="button" onClick={() => setModalIsVisible(true)}>
				{textBtn}
			</button>
		</ContainerButtonAdd>
	);
};

export default ButtonAdd;

