import { useEffect } from 'react';

import './Timer.css'
import TimerNav from '../../components/timerNav/TimerNav';
import TimerButton from '../../components/timerButton/TimerButton';
import TimerAnimation from './timerAnimation/TimerAnimation';

import useSound from 'use-sound';
import sound_01 from '../../sounds/01.mp3'
import sound_02 from '../../sounds/02.mp3'
import sound_03 from '../../sounds/03.mp3'
import sound_04 from '../../sounds/04.mp3'

import { useDispatch, useSelector } from 'react-redux';
import { 
    checkTimerMode, changeModeTime,
    changeSeconds, changeMinutes , changePause
    } from '../../store/slice/timer/timerSlice'


function Timer(props) {
    const [soundOne] = useSound(sound_01)
    const [soundTwo] = useSound(sound_02)
    const [soundThree] = useSound(sound_03)
    const [soundFour] = useSound(sound_04)

    const dispatch = useDispatch()
    const {
        minutes, seconds, paused, intervalPassed
    } = useSelector(state => state.timer)

    const {timePomo, timeBreak,
           timeLongBreak, longBreakInterval, sound
    } = useSelector(state => state.setting)

    const pause = () => { 
        if (paused) { 
            let ask = window.confirm('do you want to finish?')
            if (ask) {                  
                dispatch(changePause(false))
                dispatch(changeSeconds(0))
            }
        } else dispatch(changePause(true))
    }

    const playSound = () => {
        if (sound === 'sound one') {
            soundOne()
        } else if (sound === 'sound two') {
            soundTwo()
        } else if (sound === 'sound three') {
            soundThree()
        } else if (sound === 'sound four') {
            soundFour()
        }
    }

    const tick = () => {
        if (paused) {
           // pushTimerToStorage()
            dispatch(changeSeconds(seconds - 1))
            if (seconds === 0) {
                dispatch(changeMinutes(minutes - 1))
                dispatch(changeSeconds(59))
            }
            if (minutes === 0 && seconds === 0) { 
                playSound()
                dispatch(changeSeconds(0))
                dispatch(changePause(false))           
                dispatch(checkTimerMode(longBreakInterval))                
            }
        }
    }

    const titleTimes = () => {
        let title
        if (seconds < 10) {
            title = `${minutes}:0${seconds}`
        }
        if (minutes < 10) {
            title = `0${minutes}:${seconds}`
        } 
        if (minutes < 10 && seconds < 10) {
            title = `0${minutes}:0${seconds}`
        } 
        if (minutes >= 10 && seconds >= 10) {
            title = `${minutes}:${seconds}`
        }
        return title
    }

    useEffect(() => {
        if (!paused) {
            dispatch(changeModeTime({timePomo, timeBreak, timeLongBreak}))
            document.title = 'Pomodoro Timer'
        } else {
            document.title = `Time remaining - ${titleTimes()}`            
        }        
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    })

    return (
        <div className='timer'>
            <TimerNav />                          
            <div className='timer__main'>
                <TimerAnimation 
                    timer={titleTimes()}
                    paused={paused}
                />
            </div>            
            <TimerButton 
                pause={pause}
                paused={paused}
            />
            <div className='passedCounter'>
                {'# ' + intervalPassed + '/' + longBreakInterval}
            </div>
        </div>
    );
}

export default Timer;