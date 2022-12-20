import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employApi = createApi({
  reducerPath: "employs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63a02e2f24d74f9fe8307c15.mockapi.io/",
  }),
  tagTypes: ["employ"],
  endpoints: (builder) => ({
    getEmploys: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["employ"],
    }),
    addEmploys: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["employ"],
    }),
  }),
});

export const { useGetEmploysQuery, useAddEmploysMutation } = employApi;
