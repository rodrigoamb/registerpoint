import styled from "styled-components";

import { themes } from "../../themes/themeColors";

export const ContainerLoading = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${themes.color.tertiaryColor};
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 25;
	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid ${themes.color.primaryColor};
		border-color: ${themes.color.primaryColor} transparent
			${themes.color.primaryColor} transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

