import React from 'react';
import { NavLink } from 'react-router-dom';

import './Report.css'

function Report(props) {
    return (
        <div className='report'>
            <div className="container">
                <div className="report__inner">
                    <NavLink 
                        className={'report__btnBack'} 
                        to={`/`}
                    >X</NavLink>
                    report
                </div>
            </div>
        </div>
    );
}

export default Report;