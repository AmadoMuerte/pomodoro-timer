import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from '../header/Header';
import Report from '../report/Report';
import Setting from '../setting/Setting';
import Timer from '../timer/Timer';

function App(props) {
    const timeToday = useSelector(state => state.report.timeToday)
    const weekWork = useSelector(state => state.report.weekWork)

    const pushReportToStorage = () => {
        const report = 
        {
            timeToday, weekWork
        }   
        localStorage.setItem("report", JSON.stringify(report))
    }

    pushReportToStorage()

    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <div className="container">                    
                    <Routes>
                        <Route 
                            path='/'
                            element= {<Timer />}                                                            
                        >                            
                        </Route>
                        <Route                             
                            path="/setting" 
                            element= {<Setting />}                                                                                          
                        />
                        <Route                             
                            path="/report" 
                            element= {<Report />}                                                                                          
                        />                                                                        
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App;