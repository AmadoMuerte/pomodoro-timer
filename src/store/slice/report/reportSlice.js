import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    timeToday: 0,
    weekWork: [0, 0, 0, 0, 0, 0, 0]
}

if (localStorage.report) initialState = JSON.parse(localStorage.getItem('report'))

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        countWorkTime (state, action) {
            state.timeToday += action.payload
        },
        updateWeek (state, action) {
            state.weekWork[action.payload] = state.timeToday
        }
    }
})

export const { countWorkTime, updateWeek } = reportSlice.actions

export default reportSlice.reducer
