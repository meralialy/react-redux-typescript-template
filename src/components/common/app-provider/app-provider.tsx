import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { Props } from "./app-provider.types";

const AppProvider: React.FunctionComponent<Props> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
