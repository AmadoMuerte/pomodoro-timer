import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTime: 0
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        countWorkTime (state, action) {
            state.allTime += action.payload
        },

    }
})

export const { countWorkTime } = reportSlice.actions

export default reportSlice.reducer
