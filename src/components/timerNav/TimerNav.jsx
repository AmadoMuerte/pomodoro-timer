import React from 'react';
import './TimerNav.css'


function TimerNav(props) {
    return (
        <div className='timerNav'>
            <div className='timerNav__item'>
                Pomodoro
            </div>
            <div className='timerNav__item'>
                Short break
            </div>
            <div className='timerNav__item'>
                Long break
            </div>
        </div>
    );
}

export default TimerNav;