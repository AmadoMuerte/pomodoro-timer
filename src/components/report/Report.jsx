import React from 'react';
import './Report.css'

import {updateWeek} from '../../store/slice/report/reportSlice'
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import Schedule from '../schedule/Schedule';

function Report(props) {

    const timeToday = useSelector(state => state.report.timeToday)
    const weekWork = useSelector(state => state.report.weekWork)

    const dispatch = useDispatch() 

    const pushReportToStorage = () => {
        const report = 
        {
            timeToday, weekWork
        }   
        localStorage.setItem("report", JSON.stringify(report))
    }

    pushReportToStorage()

    const updateWeekWork = () => {
        let day = new Date().getDay()
        dispatch(updateWeek(day))
    }
   updateWeekWork()

    const countHours = () => {
        let hours = 0
        let minutes = 0
        if (timeToday >= 60) {
            hours = Math.floor(timeToday / 60)
            minutes = timeToday % 60
        }
        let time = `${hours} hours ${minutes} minutes`

        if (timeToday < 60) {
            if (timeToday > 0 && timeToday < 2) {
                time = `0 hours ${timeToday} minute`
            } else {
                time = `0 hours ${timeToday} minutes`
            }

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
                        <div className="report__top">
                            <p>
                                Timer report
                            </p>
                            <NavLink 
                                className={'report__btnBack'} 
                                to={`/`}                            
                            >X</NavLink>
                        </div>
                        <div className='report__bottom'>
                            Today your work time - {countHours()} 
                            <Schedule weekWork={weekWork}/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;