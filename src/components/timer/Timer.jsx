
import './Timer.css'

import TimerNav from '../../components/timerNav/TimerNav';
import TimerButton from '../../components/timerButton/TimerButton';
import TimerAnimation from './timerAnimation/TimerAnimation';

function Timer(props) {

    const {
            minutes, seconds, setPaused, paused,
            setTimerMode, intervalPassed, timerMode
        } = props
    const pause = () => { 
        if (paused) { 
            let ask = window.confirm('do you want to finish?')
            if (ask) {                  
                setPaused(false)
                // localStorage.removeItem('timer')
            }
        } else setPaused(true)
    }

    let timer = `${minutes}:${seconds}`

    if (seconds < 10) {
        timer = `${minutes}:0${seconds}`
    } else if (minutes < 10) {
        timer = `0${minutes}:${seconds}`
    } else if (minutes < 10 && seconds < 10) {
        timer = `0${minutes}:0${seconds}`
    } else {
        timer = `${minutes}:${seconds}`
    }

    return (
        <div className='timer'>
            <TimerNav
                setTimerMode={setTimerMode}
                timerMode={timerMode}                
             />                          
            <div className='timer__main'>
                <TimerAnimation timer={timer}/>
            </div>            
            <TimerButton 
                pause={pause}
                paused={paused}
            />
            <div className='timer__interval-passed'>#{intervalPassed}</div>
        </div>
    );
}

export default Timer;