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

    const {timePomo, timeBreak, timeLongBreak} = props

    return (
        <div className='timer'>
            <div className="timer__circle">
                <img src={circle} alt="circle" />
            </div>
            <p className='timer__title'>{timePomo}</p>
            <TimerButton />
            <TimerNav />
        </div>
    );
}

export default Timer;