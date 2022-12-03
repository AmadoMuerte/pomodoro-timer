import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import Setting from '../setting/Setting';
import Timer from '../timer/Timer';
import Report from '../report/Report';

function App(props) {

    // let reportStorage = {allWorkTime: 0}
    // if (localStorage.report) reportStorage = JSON.parse(localStorage.getItem('report'))
    // //report
    // const [allWorkTime, setAllWorkTime] = useState(reportStorage.allWorkTime)

    // const pushReportToStorage = () => {
    //     const report = 
    //     {
    //         allWorkTime,
    //     }  
    //     localStorage.setItem("report", JSON.stringify(report))
    // }
    // pushReportToStorage()

    // const countAllTime = () => {
    //         let allTime = Number(allWorkTime) + Number(timePomo)
    //         setAllWorkTime(allTime)
    // }

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
                            element={<Report />}
                        />                                                                             
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App;