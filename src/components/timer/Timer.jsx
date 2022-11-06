
import './Timer.css'

import circle from '../../images/icons8-перезагрузка-80.png'
import TimerNav from '../../components/timerNav/TimerNav';
import TimerButton from '../../components/timerButton/TimerButton';


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
            <div className="timer__circle">
                <img src={circle} alt="circle" />
            </div>            
            <p className='timer__title'>{timer}</p>
            
            <TimerButton 
                pause={pause}
                paused={paused}
            />
            <div className='timer__interval-passed'>#{intervalPassed}</div>
        </div>
    );
}

export default Timer;