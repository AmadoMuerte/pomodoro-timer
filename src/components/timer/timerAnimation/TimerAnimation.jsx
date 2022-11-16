import React from 'react';
import './TimerAnimation.css'

import animetedImg from '../../../images/x.png'
import animationImg2 from '../../../images/crossImg.png'

function TimerAnimation(props) {

    let animationClass1 = 'timer__img-animated'
    let animationClass2 = 'timer__img-animated2'
    let animationClass3 = 'timer__img-animated3'
    let animationClass4 = 'timer__img-animated4'
    if (props.paused) {
        animationClass1 += ' anim1'
        animationClass2 += ' anim2'
        animationClass3 += ' anim3'
        animationClass4 += ' anim4'
    }

    return (
        <div className='timerAnimation'>
            <div className="timer__circle">
                <p className='timer__title'>{props.timer}</p>
            </div>
            <div className={animationClass1}>
                <img src={animetedImg} alt="img animated" />
            </div>
            <div className={animationClass2}>
                <img src={animetedImg} alt="img animated" />
            </div>
            <div className={animationClass3}>
                <img src={animationImg2} alt="img animated" />
            </div>
            <div className={animationClass4}>
                <img src={animationImg2} alt="img animated" />
            </div>
        </div>
    );
}

export default TimerAnimation;