import React, { useState } from 'react';
import './Timer.css'

import circle from '../../images/icons8-перезагрузка-80.png'
import TimerNav from '../../components/timerNav/TimerNav';
import TimerButton from '../../components/timerButton/TimerButton';
//import { useEffect } from 'react';

function Timer(props) {

  //  const [count, setCount] = useState(0);
    
    // useEffect(() => {
    //     setInterval((i) => {
    //         setCount(count + 1)
    //     }, 1000)
    //     document.title = `Прошло ${count} секунд`;

    // })

    const {minutes, seconds, setTimerRun} = props

    let timer = `${minutes}:${seconds}`

    if (seconds < 10) {
        timer = `${minutes}: 0${seconds}`
    } else if (minutes < 10) {
        timer = `0${minutes}: ${seconds}`
    } else if (minutes < 10 & seconds < 10) {
        timer = `0${minutes}: 0${seconds}`
    } else {
        timer = `${minutes}: ${seconds}`
    }

    return (
        <div className='timer'>
            <div className="timer__circle">
                <img src={circle} alt="circle" />
            </div>
            <p className='timer__title'>{timer}</p>
            <TimerButton setTimerRun={setTimerRun}/>
            <TimerNav />
        </div>
    );
}

export default Timer;