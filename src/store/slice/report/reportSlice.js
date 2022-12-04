import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeToday: 0,
    weekWork: {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday : 0,
        friday: 0,
        saturday: 0,
        sunday: 0
    }
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        countWorkTime (state, action) {
            state.timeToday += action.payload
        },

    }
})

export const { countWorkTime } = reportSlice.actions

export default reportSlice.reducer
