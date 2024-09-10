import { useRef, useState } from "react"
import ResultModal from "./resultModal";

export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef();
    let dialog = useRef();
    const [timeRemaining, setTimeRemianing] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    const handleStartChalenge = () => {
        timer.current = setInterval(() => {
            setTimeRemianing((prevTimeRemaining) => { return prevTimeRemaining - 10 })
        }, 10)
        console.log(timeRemaining);

    }

    const handleResetTime = () => {
        setTimeRemianing(targetTime * 1000);
    }

    const handleStopChallenge = () => {
        clearInterval(timer.current);
        dialog.current.showModal();
        console.log(timeRemaining);
    }


    return (
        <section className="challenge">
            <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleResetTime} />
            <h2>{title}</h2>
            {timeRemaining ? 'nah, you"d lost' : ''}
            <p className="challenge-time">
                {targetTime} sencond{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStopChallenge : handleStartChalenge}>
                    {timerIsActive ? 'stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : ''}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}