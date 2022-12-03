import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    minutes:  30,
    seconds: 0,
    timerMode: 'work',
    paused: false,
    intervalPassed: 0
}

export const timerSlice = createSlice ({
    name: 'timer',
    initialState,
    reducers: {
        changeMode (state, action) {
            state.timerMode = action.payload
        },
        changeModeTime (state, action) {
            if (state.timerMode === 'work') {
                state.minutes = action.payload.timePomo                 
            } else if (state.timerMode === 'break') {
                state.minutes = action.payload.timeBreak 
            } else if (state.timerMode === 'longBreak') {
                state.minutes = action.payload.timeLongBreak
                state.intervalPassed = 0
            }            
        },
        checkTimerMode (state, action) {
            if (state.timerMode === 'work') {
                state.intervalPassed = state.intervalPassed + 1
                if ( state.intervalPassed >= (action.payload - 1) ) {
                   state.timerMode ='longBreak'                  
                } else {
                    state.timerMode = 'break' 
                }
            } else if (state.timerMode === 'break') {
                state.timerMode = 'work' 
            } else if (state.timerMode === 'longBreak') {               
                state.timerMode = 'work' 
            }
            
        },
        changeSeconds (state, action) {
            state.seconds = action.payload
        },
        changeMinutes (state, action) {
            state.minutes = action.payload
        },
        changePause (state, action) {
            state.paused = action.payload
        }
    }
})

export const { changeModeTime, checkTimerMode,
               changeSeconds, changeMode,
               changeMinutes, changePause } = timerSlice.actions

export default timerSlice.reducer