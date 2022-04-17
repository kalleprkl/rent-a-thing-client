import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Thing } from '../types'

export const rentalApi = createApi({
    reducerPath: "rentalApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api"}),
    endpoints: builder => ({
        fetchAllThings: builder.query<Thing, void>({
          query: () => "Things",
        }),
      }),
})

export const { useFetchAllThingsQuery } = rentalApi