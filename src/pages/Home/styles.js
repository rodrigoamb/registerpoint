import styled from "styled-components";

export const ContainerHome = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 1100px) {
	}
`;

export const ContainerContent = styled.div`
	width: calc(100% - 345px);
	min-height: 100vh;
	margin-left: 345px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1100px) {
		width: 100%;
		margin-left: 0;
	}
`;

