import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Props } from "../reducers/cat";

const api = createApi({
	reducerPath: "catApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://catfact.ninja",
		prepareHeaders: (headers) => {
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getFact: builder.query<Props, void>({
			query: () => "/fact",
		}),
	}),
});

export default api;
