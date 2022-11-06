import React from 'react';
import './TimerNav.css'


function TimerNav(props) {
    const { setTimerMode} = props

    const timerPomo = () => {
        setTimerMode('work')                    
    }

    const timerBreak = () => {
        setTimerMode('break')               
    }
    const timerLongBreak = () => {
        setTimerMode('longBreak')                       
    }

   

    return (
        <div className='timerNav'>
            <div 
                className='timerNav__item'
                onClick={timerPomo}
            >
                Pomodoro
            </div>
            <div 
                className='timerNav__item'
                onClick={timerBreak}
            >
                Short break
            </div>
            <div 
                className='timerNav__item'
                onClick={timerLongBreak}
            >
                Long break
            </div>
        </div>
    );
}

export default TimerNav;