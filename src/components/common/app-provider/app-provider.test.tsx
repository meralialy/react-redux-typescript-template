import React from "react";
import { render } from "@testing-library/react";
import AppProvider from "./app-provider";

const dataTestId = "app-provider";

const setup = () => {
	const component = render(
		<AppProvider>
			<div data-testid={dataTestId} />
		</AppProvider>,
	);
	const element = component.getByTestId(dataTestId);

	expect(element).toBeInTheDocument();

	return component;
};

describe("<AppProvider />", () => {
	it("should render", () => {
		const component = setup();

		expect(component).toBeTruthy();
	});
});
