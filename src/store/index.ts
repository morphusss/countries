import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { themeStatusStoreReducer } from "./themeStatusStore/themeStatusStore.slice";

const Reducers = combineReducers({
    themeStatus: themeStatusStoreReducer,
})

export default configureStore({
    reducer: Reducers,
})

export type State = ReturnType<typeof Reducers>;