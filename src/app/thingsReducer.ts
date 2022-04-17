import { createAction,createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { Thing } from "../types"
import { fetchThings } from '../api/things'

//const fetchAllThings = createAsyncThunk<Thing[]>("things/fetchAllThings", async thunkAPI => await fetchThings())
//
//const initialState: Thing[] = []
//
//export const thingsReducer = createReducer(initialState, builder => {
//    builder.addCase(fetchAllThings, (state, action) => {
//        state = [...state, ...action.payload]
//    })
//})
//
//export const showThings = async thunk => {
//    showThingsAction.
//    return {
//      type: "things/fetchAllThings",
//      payload: await fetchThings()
//    }
//  }