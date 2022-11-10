import { themes } from "../../../themes/themeColors";

import styled from "styled-components";

export const ContainerModalCompany = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;

	.limit-modal {
		padding: 80px 0;
		backdrop-filter: blur(6px);
		background-color: rgba(100, 100, 100, 0.8);
		min-height: 100vh;
		min-width: 100%;
	}

	.modal-square {
		margin: auto;
		background-color: ${themes.color.tertiaryColor};
		width: 90%;
		max-width: 600px;
		padding: 0 50px;
		padding-bottom: 50px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
		border-radius: 5px;

		.container-title-form {
			margin: auto;
			text-align: center;
			padding: 20px 0;
			background-color: ${themes.color.primaryColor};
			color: ${themes.color.primaryText};
			position: relative;
			top: -25px;
			border-radius: 8px;
		}

		.container-body-form {
			background-color: ${themes.color.primaryText};
			padding: 15px;
			border-radius: 8px;
		}

		.label-row {
			display: flex;
			flex-direction: column;
			margin-bottom: 15px;

			.title-form {
				font-weight: bold;
				margin-bottom: 5px;
			}

			.input-form-company {
				width: 100%;
				border: none;
				background-color: ${themes.color.tertiaryColor};
				padding: 15px 8px;
				border-bottom: 3px solid ${themes.color.secondaryColor};
				border-left: 3px solid ${themes.color.secondaryColor};
			}
		}

		.row-btn {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: space-between;

			.btn-save,
			.btn-cancel {
				color: ${themes.color.primaryText};
				font-size: 1.2rem;
				border-radius: 8px;
				border: none;
				padding: 10px 20px;
				cursor: pointer;
			}

			.btn-save {
				background-color: ${themes.color.secondaryColor};
				&:hover {
					background-color: #c74a75;
				}
				margin-top: 30px;
				margin-bottom: 20px;
			}

			.btn-cancel {
				background-color: ${themes.color.primaryColor};
				&:hover {
					background-color: #26266b;
				}
			}
		}
	}

	@media (max-width: 500px) {
		.modal-square {
			width: 92%;
			padding: 0 10px;
		}

		.container-title-form {
			font-size: 0.8rem;
		}
	}
`;

