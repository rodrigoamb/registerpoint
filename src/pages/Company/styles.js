import styled from "styled-components";

export const ContainerContent = styled.div`
	width: calc(100% - 345px);
	max-width: 1788px;
	min-height: 100vh;
	margin-left: 345px;
	padding: 50px;

	@media (max-width: 1100px) {
		width: 100%;
		margin-left: 0;
		padding: 15px;
	}
`;

