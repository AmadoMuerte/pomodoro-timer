import { useEffect } from 'react';
import './TimerButton.css'

function TimerButton(props) {

    let btnName = 'Start';

        if (props.paused) {
            btnName = 'Stop'
        } else { btnName = 'Start' }

    return (
        <button 
            className="timer__start"
            onClick={props.pause}
        >
                {btnName}
        </button>
    );
}

export default TimerButton;