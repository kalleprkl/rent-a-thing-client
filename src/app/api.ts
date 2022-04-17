import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rentalApi = createApi({
    reducerPath: "rentalApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api"}),
    endpoints: builder => ({
        fetchAllThings: builder.query<Thing[], void>({
          query: () => "Things",
        }),
      }),
})

export const { useFetchAllThingsQuery } = rentalApi

export interface Customer {
    id: number
}

export interface Thing {
    id: number
}

export interface Contract {
    id: number,
    customerId: number,
    thingId: number
}