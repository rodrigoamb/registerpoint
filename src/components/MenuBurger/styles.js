import styled from "styled-components";

import { themes } from "../../themes/themeColors";

export const ContainerMenuBurger = styled.div`
	header {
		height: 60px;
		background-color: ${themes.color.primaryColor};
		display: flex;
		align-items: center;
		padding: 0 15px;
		box-shadow: 5px 0 10px rgba(0, 0, 0, 0.5);

		.iconBurger {
			font-size: 2rem;
			color: white;
			cursor: pointer;
		}
	}
`;

