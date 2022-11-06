import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Setting from '../../routes/setting/Setting';
import Timer from '../timer/Timer';
import Report from '../../routes/report/Report';
import ErrorPage from '../../routes/errorPage/ErrorPage'

function App(props) {

    //localStorageSetting
    let storageSettings = 
    {
        timePomo: 30, timeBreak: 5,
        timeLongBreak: 15, longBreakInterval: 4,
        intervalPassed: 0
    }
 if (localStorage.setting) storageSettings = JSON.parse(localStorage.getItem('setting'))
    //settings
    const [timePomo, setTimePomo] = useState(storageSettings.timePomo)
    const [timeBreak, setTimeBreak] = useState(storageSettings.timeBreak)
    const [timeLongBreak, setTimeLongBreak] = useState(storageSettings.timeLongBreak)
    const [longBreakInterval, setLongBreakInterval] = useState(storageSettings.longBreakInterval)
    const [intervalPassed, setIntervalPassed] = useState(storageSettings.intervalPassed)

    const pushSettingToStorage = () => {
        const setting = 
        {
            timePomo, timeBreak, timeLongBreak,
            longBreakInterval, intervalPassed
        }   
        localStorage.setItem("setting", JSON.stringify(setting))
    }
    pushSettingToStorage()

    //localStorageTimer
    let storageTimer = {minutes: timePomo, seconds: 0, timerMode: 'work'} 
    //if (localStorage.timer) storageTimer = JSON.parse(localStorage.getItem('timer'))

    //timer
    const [minutes, setMinutes] = useState(storageTimer.minutes)
    const [seconds, setSeconds] = useState(storageTimer.seconds)
    const [timerMode, setTimerMode] = useState(storageTimer.timerMode) 
    const [paused, setPaused] = useState(false)
    
    //push to localStorage
    // const pushTimerToStorage = () => {
    //     const timer = {minutes, seconds, timerMode}
    //     localStorage.setItem("timer", JSON.stringify(timer))
    // }

    const resetTimer = () => {
        if (timerMode === 'work' && intervalPassed !== longBreakInterval) {
            setMinutes(timePomo)
            
        } else if (timerMode === 'break') {
            setMinutes(timeBreak)
        } else if (timerMode === 'longBreak') {
            setMinutes(timeLongBreak)
        }
        setSeconds(0)
        setPaused(false)
    }

    const checkTimerMode = () => {
        if (timerMode === 'work') {
            setIntervalPassed(intervalPassed + 1)
            setTimerMode('break')
        }

        if (intervalPassed >= longBreakInterval) {
            setTimerMode('longBreak')
        }
        
        if (timerMode === 'longBreak') {
            setTimerMode('work')
            setIntervalPassed(0)
        }

        if (timerMode === 'break') {
            setTimerMode('work')
        }

          
        setPaused(false)
    }

    // timer tick interval
    const tick = () => {
        if (paused) {
           // pushTimerToStorage()
            setSeconds(seconds -1)
            if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
            }
            if (minutes === 0 && seconds === 1) {  
                checkTimerMode()
            }
        }
    }

    const titleTimes = () => {
        let title
        if (seconds < 10) {
            title = `${minutes}:0${seconds}`
        } else if (minutes < 10) {
            title = `0${minutes}:${seconds}`
        } else if (minutes < 10 && seconds < 10) {
            title = `0${minutes}:0${seconds}`
        } else {
            title = `${minutes}:${seconds}`
        }
        return title
    }


    useEffect(() => {
        if (!paused) {
            resetTimer()
            
        } else {
            document.title = `Time remaining - ${titleTimes()}`
        }
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
      });

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Timer
                        minutes={minutes}
                        seconds={seconds}
                        setPaused={setPaused}
                        paused={paused}                    
                        setTimerMode={setTimerMode}  
                        intervalPassed={intervalPassed}   
                        timerMode={timerMode}  
                    />
                    <Routes>
                        <Route 
                            errorElement={<ErrorPage />}
                            path="/setting" 
                            element=
                                {
                                    <Setting 
                                        setTimePomo={setTimePomo}
                                        timePomo={timePomo}
                                        timeBreak={timeBreak}
                                        setTimeBreak={setTimeBreak}
                                        timeLongBreak={timeLongBreak}
                                        setTimeLongBreak={setTimeLongBreak}
                                        saveSetting={pushSettingToStorage} 
                                        longBreakInterval={longBreakInterval}
                                        setLongBreakInterval={setLongBreakInterval}                                                                         
                                    />
                                }
                        /> 
                        <Route 
                            errorElement={<ErrorPage />}
                            path="/report" 
                            element={<Report />}
                        />                                                                             
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default App;