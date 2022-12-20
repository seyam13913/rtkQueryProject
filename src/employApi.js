import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employApi = createApi({
  reducerPath: "employs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63a02e2f24d74f9fe8307c15.mockapi.io/",
  }),
  tagTypes: "employ",
  endpoints: (builder) => ({
    getEmploys: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: "employ",
    }),
    addEmploys: builder.query({
      query: () => ({
        url: "users",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: "employ",
    }),
  }),
});

export const { useGetEmploysQuery } = employApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const employApi = createApi({
//   reducerPath: 'employApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://63a02e2f24d74f9fe8307c15.mockapi.io/' }),
//   endpoints: (builder) => ({
//     getAllEmploy: builder.query({
//       query: () => `users`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetAllEmployQuery } = employApi
