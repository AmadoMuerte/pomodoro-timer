import React from 'react';
import './Report.css'

import { useDispatch, useSelector } from 'react-redux';

function Report(props) {
    const allTime = useSelector(state => state.report.allTime)

    const countHours = () => {
        let hours = 0
        let minutes = 0
        if (allTime >= 60) {
            hours = Math.floor(allTime / 60)
            minutes = allTime % 60
        }

        let time = `${hours} hours ${minutes} minutes`

        if (allTime < 60) {
            time = `0 hours ${allTime} minutes`
        } else {
            if (hours === 1) {
                time = `${hours} hour ${minutes} minutes`
            }
            if (minutes === 1) {
                time = `${hours} hour ${minutes} minute`
            }
            if (hours === 1 && minutes === 1) {
                time = `${hours} hour ${minutes} minute`
            }
        }
        return time
    }

    return (
        <div className='report'>
            <div className="container">
                <div className="report__inner">
                   <div>
                        Today your work time - {countHours()} 
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Report;