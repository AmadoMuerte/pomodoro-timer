import React from 'react';
import './Report.css'

import {updateWeek} from '../../store/slice/report/reportSlice'
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import Schedule from '../schedule/Schedule';

function Report({updateReport}) {

    const timeToday = useSelector(state => state.report.timeToday)
    const weekWork = useSelector(state => state.report.weekWork)

    const dispatch = useDispatch() 

    const updateWeekWork = () => {
        let day = new Date().getDay()
        dispatch(updateWeek(day))
    }
   
    updateWeekWork()

   const countAllWeek = () => {
        let time = 0
        weekWork.map(el => time += el)
        return countHours(time)
   }

    const countHours = (times) => {
        let hours = 0
        let minutes = times
        let timeStirng = `0 minute`
        if (times >= 60) {
            hours = Math.floor(times / 60)
            minutes = times % 60
            timeStirng = `${hours} hours ${minutes} minutes`

            if (hours === 1) {
                timeStirng = `${hours} hour ${minutes} minutes`
            }
            if (minutes === 1) {
                timeStirng = `${hours} hour ${minutes} minute`
            }
            if (hours === 1 && minutes === 1) {
                timeStirng = `${hours} hour ${minutes} minute`
            }
        } else {
            if (minutes < 2) {
                timeStirng = `${minutes} minute`
            } else  {
                timeStirng = `${minutes} minutes`
            }
        }
        return timeStirng
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
                            <p>Today your work time - {countHours(timeToday)} </p>
                            
                            <Schedule weekWork={weekWork}/>
                            <p>Your time all week - {countAllWeek()}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;