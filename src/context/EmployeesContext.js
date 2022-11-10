import { createContext, useState } from "react";

export const EmployeesContext = createContext();

export const EmployeesContextProvider = ({ children }) => {
	const [employees, setEmployees] = useState(null);

	return (
		<EmployeesContext.Provider value={{ employees, setEmployees }}>
			{children}
		</EmployeesContext.Provider>
	);
};

