import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Setting from '../../routes/setting/Setting';
import Timer from '../timer/Timer';
import Report from '../../routes/report/Report';
import ErrorPage from '../../routes/errorPage/Error-page';

function App(props) {

    const [timePomo, setTimePomo] = useState(30);
    const [timeBreak, setTimeBreak] = useState(5);
    const [timeLongBreak, setTimeLongBreak] = useState(15);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Timer
                        timePomo={timePomo}
                        timeBreak={timeBreak}
                        timeLongBreak={timeLongBreak}
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