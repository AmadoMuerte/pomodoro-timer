
import './TimerNav.css'
import {changeMode} from '../../store/slice/timer/timerSlice'
import { useDispatch, useSelector } from 'react-redux'

function TimerNav(props) {
    const timerMode = useSelector(state => state.timer.timerMode)
    const dispatch = useDispatch()

    const timerPomo = () => {
        dispatch(changeMode('work'))         
    }

    const timerBreak = () => {
        dispatch(changeMode('break'))                   
    }
    const timerLongBreak = () => {
        dispatch(changeMode('longBreak'))                          
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