import styled from "styled-components";

export const ContainerHome = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 1100px) {
		flex-direction: column;
	}
`;

export const ContainerContent = styled.div`
	width: calc(100% - 345px);
	margin-left: 345px;
	display: flex;
	justify-content: center;
	padding: 200px 0;

	@media (max-width: 1100px) {
		padding: 100px 0;
		width: 100%;
		margin-left: 0;
	}
`;

