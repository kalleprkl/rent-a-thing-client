import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { rentalApi } from './api'

export const store = configureStore({
  reducer: {
    [rentalApi.reducerPath]: rentalApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rentalApi.middleware),
})

setupListeners(store.dispatch)

