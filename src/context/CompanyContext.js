import { createContext, useState } from "react";

export const CompanyContext = createContext();

export const CompanyContextProvider = ({ children }) => {
	const [company, setCompany] = useState(null);

	return (
		<CompanyContext.Provider value={{ company, setCompany }}>
			{children}
		</CompanyContext.Provider>
	);
};

