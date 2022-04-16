import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { thingsReducer, ThingsReducer } from "./thingsReducer"
import thunkMiddleware from "redux-thunk"

interface RootReducer {
  things: ThingsReducer
}

const rootReducer: RootReducer = {
  things: thingsReducer
}

export const store = configureStore({
  reducer: rootReducer,
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
