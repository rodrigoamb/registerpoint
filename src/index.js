import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";

//import contextApi
import { CompanyContextProvider } from "./context/CompanyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CompanyContextProvider>
			<App />
			<GlobalStyles />
		</CompanyContextProvider>
	</React.StrictMode>
);

