import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { thingsReducer, ThingsReducer } from "./thingsReducer"

const asyncMiddleWare = (store: any) => (next: any) => (action: any) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

interface RootReducer {
  things: ThingsReducer
}

const rootReducer: RootReducer = {
  things: thingsReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [asyncMiddleWare]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
