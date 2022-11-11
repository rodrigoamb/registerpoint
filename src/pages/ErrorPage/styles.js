import styled from "styled-components";

import { themes } from "../../themes/themeColors";

export const ContainerErrorPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${themes.color.primaryColor};
	min-height: 100vh;

	img {
		width: 60%;
		max-width: 200px;
		margin-bottom: 15px;
	}

	div {
		font-size: 1.5rem;
		color: ${themes.color.secondaryColor};
		margin-bottom: 25px;
	}

	.btn {
		cursor: pointer;
		background-color: ${themes.color.secondaryColor};
		border: none;
		border-radius: 8px;
		width: 80%;
		max-width: 275px;
		height: 50px;
		color: #eeeeee;
		letter-spacing: 1.2px;
		transition: 0.2s;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		text-transform: uppercase;
		text-align: center;

		&:hover {
			background-color: #c74a75;
		}
	}
`;

