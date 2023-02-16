import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import AppProvider from "./components/common/app-provider";
import "./index.scss";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<AppProvider>
		<App />;
	</AppProvider>,
);
