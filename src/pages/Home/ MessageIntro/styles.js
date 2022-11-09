import { themes } from "../../../themes/themeColors";

import styled from "styled-components";

export const ContainerSquareHome = styled.div`
	background-color: ${themes.color.primaryText};
	width: 90%;
	max-width: 600px;
	padding: 0 40px;
	padding-bottom: 20px;
	border-radius: 12px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

	.header-content {
		background-color: ${themes.color.primaryColor};
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 30px;
		border-radius: 12px;
		position: relative;
		top: -30px;

		img {
			width: 120px;
		}

		h1 {
			font-size: 1.6rem;
			color: ${themes.color.primaryText};
		}
	}

	.text-bold {
		font-weight: bold;
	}

	.message-content {
		p {
			margin-bottom: 10px;
		}
		ul {
			margin: auto;
			width: 90%;

			li {
				margin-bottom: 5px;
			}
		}
	}
`;

