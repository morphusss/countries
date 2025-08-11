import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type State = {
    themeStatus: boolean,
}

const initialState: State = {
    themeStatus: false,
}

const themeStatusSlice = createSlice({
    initialState,
    name: "theme Status",
    reducers: {
        setThemeStatus: (state, action: PayloadAction<boolean>) => {
            state.themeStatus = action.payload;
        }
    }
})

export const themeStatusStoreReducer = themeStatusSlice.reducer;

export const { setThemeStatus } = themeStatusSlice.actions;