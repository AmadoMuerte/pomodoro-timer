import './TimerButton.css'

function TimerButton(props) {

    const startTimer = () => {
        props.setTimerRun(true)
    }

    return (
        <button 
            className="timer__start"
            onClick={startTimer}
        >
                Start
        </button>
    );
}

export default TimerButton;