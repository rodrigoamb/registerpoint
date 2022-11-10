import { themes } from "../../themes/themeColors";

import styled from "styled-components";

export const ContainerButtonAdd = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px 20px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #8bebff;
	margin-bottom: 30px;

	p {
		font-size: 1.1rem;
		color: ${themes.color.secondaryText};
	}

	button {
		background-color: ${themes.color.secondaryColor};
		color: ${themes.color.primaryText};
		font-size: 1.2rem;
		border-radius: 8px;
		border: none;
		padding: 10px 20px;
		cursor: pointer;

		&:hover {
			background-color: #c74a75;
		}
	}

	@media (max-width: 1220px) {
		flex-direction: column;
		align-items: flex-start;

		p {
			margin-bottom: 15px;
		}
	}
`;

