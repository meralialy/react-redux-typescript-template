import React from "react";
import { useAppSelector } from "../../redux";
import { catApi } from "../../redux/apis";

const App: React.FunctionComponent = () => {
	const { fact } = useAppSelector((state) => state.cat);

	catApi.useGetFactQuery();

	return <div data-testid="app">{fact}</div>;
};

export default App;
