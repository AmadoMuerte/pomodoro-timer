
import './TimerNav.css'


function TimerNav(props) {
    const { setTimerMode, timerMode} = props

    const timerPomo = () => {
        setTimerMode('work')                    
    }

    const timerBreak = () => {
        setTimerMode('break')               
    }
    const timerLongBreak = () => {
        setTimerMode('longBreak')                       
    }

    let classItemPomo = ''
    let classItemBreak = ' timerNav__item'
    let classItemLongBreak = ' timerNav__item'
    
    if (timerMode === 'work') {
        classItemPomo = ' timerNav__item-active'
    } else if (timerMode === 'break') {
        classItemBreak = ' timerNav__item-active'
    } else if (timerMode === 'longBreak'){
        classItemLongBreak = ' timerNav__item-active'
    }

    return (
        <div className='timerNav'>
            <div 
                className={'timerNav__item' + classItemPomo}
                onClick={timerPomo}
            >
                Pomodoro
            </div>
            <div 
                className={'timerNav__item' + classItemBreak}
                onClick={timerBreak}
            >
                Short break
            </div>
            <div 
                className={'timerNav__item' + classItemLongBreak}
                onClick={timerLongBreak}
            >
                Long break
            </div>
        </div>
    );
}

export default TimerNav;