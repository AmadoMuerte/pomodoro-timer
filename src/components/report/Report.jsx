import React from 'react';
import './Report.css'

import { useDispatch, useSelector } from 'react-redux';

function Report(props) {
    const dispatch = useDispatch()
    const allTime = useSelector(state => state.report.allTime)

    const countHours = () => {
        let hours = 0
        let minutes = 0
        if (allTime >= 60) {
            hours = Math.floor(allTime / 60)
            minutes = allTime % 60
        }
        
        let time = `${hours} hours ${minutes} minutes`

        if (hours === 1) {
            time = `${hours} hour ${minutes} minutes`
        }
        if (minutes === 1) {
            time = `${hours} hour ${minutes} minute`
        }
        if (hours === 1 && minutes === 1) {
            time = `${hours} hour ${minutes} minute`
        }

        return time
    }

    return (
        <div className='report'>
            <div className="container">
                <div className="report__inner">
                   <div>
                        Today your all work time - {countHours()} 
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Report;