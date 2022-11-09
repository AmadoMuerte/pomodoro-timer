import React from 'react';
import './TimerAnimation.css'

import animetedImg from '../../../images/x.png'
import animetedImg2 from '../../../images/img.png'


function TimerAnimation(props) {
    return (
        <div className='timerAnimation'>
            <div className="timer__circle">
                <p className='timer__title'>{props.timer}</p>
            </div>
            <div className='timer__img-animated'>
                <img src={animetedImg} alt="img animated" />
            </div>
            <div className='timer__img-animated2'>
                <img src={animetedImg} alt="img animated" />
            </div>
            {/* <div className='timer__img-animated2'>
                <img src={animetedImg2} alt="img animated" />
            </div> */}
        </div>
    );
}

export default TimerAnimation;