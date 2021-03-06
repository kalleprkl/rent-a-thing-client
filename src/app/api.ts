import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rentalApi = createApi({
    reducerPath: "rentalApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api"}),
    endpoints: builder => ({
        fetchAllCustomers: builder.query<Customer[], void>({
            query: () => "Customers"
        }),
        fetchContractsByCustomer: builder.query<Contract[], number | void>({
            query: customerId => customerId ? `Contracts/${customerId}` : `Contracts`
        }),
        fetchAllThings: builder.query<Thing[], void>({
          query: () => "Things",
        }),
      }),
})

export const { useFetchAllCustomersQuery, useFetchAllThingsQuery, useFetchContractsByCustomerQuery } = rentalApi

export type QueryAction = typeof useFetchAllCustomersQuery | typeof useFetchAllThingsQuery | typeof useFetchContractsByCustomerQuery

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