import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    timePomo: 30, 
    timeBreak: 5,
    timeLongBreak: 15, 
    longBreakInterval: 4,
    intervalPassed: 0
}
if (localStorage.setting) initialState = JSON.parse(localStorage.getItem('setting'))

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers:  {
        setPomoTime (state, action) {
            state.timePomo = action.payload                   
        },
        setBreakTime (state, action) {
            state.timeBreak = action.payload                   
        },
        setLongBreakTime (state, action) {
            state.timeLongBreak = action.payload                   
        },
        LongBreakIntervalTime (state, action) {
            state.longBreakInterval = action.payload                   
        },
        
    }
}) 

export const { setPomoTime, setBreakTime,
               setLongBreakTime, LongBreakIntervalTime } = settingSlice.actions

export default settingSlice.reducer