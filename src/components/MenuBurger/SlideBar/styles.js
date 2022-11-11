import styled from "styled-components";

import { themes } from "../../../themes/themeColors";

export const ContainerSlideBar = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	min-width: 100%;
	min-height: 100vh;
	backdrop-filter: blur(6px);
	background-color: rgba(100, 100, 100, 0.3);
	z-index: 99;
	pointer-events: auto;

	.navbar-container {
		position: relative;
		background-color: ${themes.color.primaryColor};
		width: 90%;
		max-width: 300px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.5);
	}

	.icon-close {
		font-size: 2.5rem;
		position: absolute;
		top: 10px;
		right: 10px;
		color: white;

		&:hover {
			cursor: pointer;
		}
	}

	.img {
		width: 200px;
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
`;

