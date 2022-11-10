//import themes
import { themes } from "../../themes/themeColors";

import styled from "styled-components";

export const ContainerSideBar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 345px;
	height: 100vh;
	min-height: 600px;
	background-color: ${themes.color.primaryColor};
	display: flex;
	box-shadow: 0 10px 8px rgba(0, 0, 0, 0.5);
	flex-direction: column;
	align-items: center;
	z-index: 5;

	.img {
		width: 260px;
		margin-top: 80px;
		margin-bottom: 50px;
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

		&:hover {
			background-color: #c74a75;
		}
	}

	.icons {
		font-size: 1.3rem;
		margin-right: 8px;
	}

	@media (max-width: 1100px) {
		display: none;
	}
`;

