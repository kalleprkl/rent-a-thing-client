import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { thingsReducer } from "./thingsReducer"
import thunkMiddleware from "redux-thunk"

export const store = configureStore({
  reducer: {
    things: thingsReducer
  },
  middleware: [thunkMiddleware]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
