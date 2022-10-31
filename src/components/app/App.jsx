import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Setting from '../../routes/setting/Setting';
import Timer from '../timer/Timer';
import Report from '../../routes/report/Report';
import ErrorPage from '../../routes/errorPage/ErrorPage'

function App(props) {

    //settings
    const [timePomo, setTimePomo] = useState(30)
    const [timeBreak, setTimeBreak] = useState(5)
    const [timeLongBreak, setTimeLongBreak] = useState(15)

    //timer
    const [minutes, setMinutes] = useState(timePomo)
    const [seconds, setSeconds] = useState(0)
    const [timerRun, setTimerRun] = useState(false)


    const timerLogic = () => {
        const timeinterval = setInterval(() => {
            setSeconds(seconds -1)
            if (seconds < 10) {
                document.title = `${minutes}: 0${seconds}`
            }  else if (minutes < 10) {
                document.title = `0${minutes}: ${seconds}`
            } else if (minutes < 10 & seconds < 10) {
                document.title = `0${minutes}: 0${seconds}`
            } else {
                document.title = `${minutes}: ${seconds}`
            }
            setSeconds(seconds -1)
            if (seconds === 0) {
                setSeconds(59)
                setMinutes(minutes - 1)
            }
            
            if(minutes === 0){  
                clearInterval(timeinterval);  
                } 
        }, 1000);
    }

        useEffect(() => {
            if (timerRun) {
                timerLogic();
            }
        })

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Timer
                        minutes={minutes}
                        seconds={seconds}
                        setTimerRun={setTimerRun}
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
    );
}

export default App;