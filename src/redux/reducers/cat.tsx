import { createSlice } from "@reduxjs/toolkit";
import catApi from "../apis/cat-api";

export type Props = {
	fact: string;
	length: number;
};

const initialState: Props = {
	fact: null,
	length: 0,
};

export const slice = createSlice({
	name: "cat",
	initialState,
	reducers: undefined,
	extraReducers(builder) {
		builder.addMatcher(catApi.endpoints.getFact.matchFulfilled, (_state, { payload }) => {
			return payload;
		});
	},
});

export default slice.reducer;
