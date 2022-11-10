import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

export const useEmployeesContext = () => {
	const context = useContext(EmployeesContext);

	if (!context) {
		console.log("Context not found!");
		return;
	}

	return context;
};

