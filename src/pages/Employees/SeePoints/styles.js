import styled from "styled-components";

import { themes } from "../../../themes/themeColors";

export const ContainerContent = styled.div`
	width: calc(100% - 345px);
	max-width: 1788px;
	min-height: 100vh;
	margin-left: 345px;
	padding: 50px;

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

			.list-points {
				max-width: 600px;
				background-color: ${themes.color.tertiaryColor};
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 15px;
				margin-bottom: 10px;
				text-transform: uppercase;
				border-radius: 8px;
				box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
			}

			.message-point {
				color: ${themes.color.secondaryColor};
			}
		}
	}

	.label-row {
		display: flex;
		flex-direction: column;
		margin-bottom: 25px;

		span {
			margin-bottom: 10px;
		}

		input[type="date"] {
			width: 90%;
			max-width: 230px;
			border: none;
			background-color: ${themes.color.tertiaryColor};
			padding: 15px 8px;
			border-bottom: 3px solid ${themes.color.secondaryColor};
			border-left: 3px solid ${themes.color.secondaryColor};
		}

		.select-employees {
			width: 90%;
			max-width: 230px;
			border: none;
			background-color: ${themes.color.tertiaryColor};
			padding: 15px 8px;
			border-bottom: 3px solid ${themes.color.secondaryColor};
			border-left: 3px solid ${themes.color.secondaryColor};
		}
	}

	.btn-point {
		background-color: ${themes.color.secondaryColor};
		color: ${themes.color.primaryText};
		font-size: 1.2rem;
		border-radius: 8px;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		margin-bottom: 15px;

		&:hover {
			background-color: #c74a75;
		}
	}

	.name-employees {
		font-size: 1.8rem;
	}

	.row-arrow {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 10px;

		.icon-arrow {
			font-size: 1.8rem;
			cursor: pointer;
		}

		span {
			font-weight: bold;
			font-size: 1.3rem;
		}
	}

	@media (max-width: 1100px) {
		width: 100%;
		margin-left: 0;
		padding: 45px 15px;
	}

	@media (max-width: 550px) {
		.title-container {
			font-size: 0.5rem;
		}

		.row-arrow {
			span {
				font-size: 1rem;
				margin-left: 15px;
			}
		}
	}
`;

