import styled from "styled-components";

import { themes } from "../../themes/themeColors";

export const ContainerContent = styled.div`
	width: calc(100% - 345px);
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

			li {
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 50px;
				padding: 0 15px;
				border-bottom: 1px solid grey;
				margin-bottom: 10px;
				text-transform: uppercase;
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

		input[type="datetime-local"] {
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

	.message-add-point {
		color: ${themes.color.secondaryColor};
		font-weight: bold;
		font-size: 1.2rem;
	}
`;

