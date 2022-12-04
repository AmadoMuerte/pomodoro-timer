import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTime: 80
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        countWorkTime (state, action) {
            state.allTime = state.allTime + action.payload
            console.log(state.allTime)
        },

    }
})

export const { allWorkTime } = reportSlice.actions

export default reportSlice.reducer
