import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rentalApi = createApi({
    reducerPath: "rentalApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api"}),
    endpoints: builder => ({
        fetchAllCustomers: builder.query<Customer[], void>({
            query: () => "Customers"
        }),
        fetchContractsByCustomer: builder.query<Contract[], void>({
            query: customerId => `Customers${customerId}`
        }),
        fetchAllThings: builder.query<Thing[], void>({
          query: () => "Things",
        }),
      }),
})

export const { useFetchAllThingsQuery, useFetchContractsByCustomerQuery } = rentalApi

export interface BaseType {
    id: number
}

export interface Customer extends BaseType {}

export interface Thing extends BaseType {}

export interface Contract extends BaseType {
    customerId: number,
    thingId: number
}

export type AppData = Customer | Thing | Contract