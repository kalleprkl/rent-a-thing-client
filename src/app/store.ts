import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import thingsReducer from "./thingsReducer"

const asyncMiddleWare = (storeAPI: any) => (next: any) => (action: any) => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState)
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    things: thingsReducer,
  },
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
