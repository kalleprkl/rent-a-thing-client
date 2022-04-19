import { configureStore, createSlice } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rentalApi } from './api'

const app = createSlice({
  name: "app",
  initialState: {},
  reducers: {

  }
})

export const store = configureStore({
  reducer: {
    [rentalApi.reducerPath]: rentalApi.reducer,
    app: app.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rentalApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;