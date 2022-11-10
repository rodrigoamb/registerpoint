import styled from "styled-components";

import { themes } from "../../../themes/themeColors";

export const ContainerSquare = styled.div`
	.title-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20px;
		border-radius: 10px;
		background-color: ${themes.color.primaryColor};
		color: ${themes.color.primaryText};
		text-transform: uppercase;
		margin-bottom: 30px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
	}

	.icons {
		font-size: 1.8rem;
		margin-right: 10px;
	}

	.container-content {
		background-color: ${themes.color.primaryText};
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		padding: 30px;

		h2 {
			margin-bottom: 30px;
		}

		ul {
			list-style: none;

			li {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				height: 50px;
				padding: 0 15px;
				border-bottom: 1px solid grey;
				margin-bottom: 10px;
				text-transform: uppercase;

				.name-company {
					font-weight: bold;
					text-transform: uppercase;
					width: 50%;
					max-width: 300px;
				}

				.cnpj-company {
					font-size: 1.1rem;
					letter-spacing: 0.4px;
				}
			}
		}
	}
`;

