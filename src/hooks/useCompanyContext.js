import { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

export const useCompanyContext = () => {
	const context = useContext(CompanyContext);

	if (!context) {
		console.log("Context not found!");
		return;
	}

	return context;
};

