import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from '../header/Header';
import Report from '../report/Report';
import Setting from '../setting/Setting';
import Timer from '../timer/Timer';

function App(props) {

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