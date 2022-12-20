import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employApi = createApi({
  reducerPath: "employs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63a02e2f24d74f9fe8307c15.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getEmploys: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
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
