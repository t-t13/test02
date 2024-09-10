import { useRef, useState } from "react"
import ResultModal from "./resultModal";

export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef();
    let dialog = useRef();
    const [timeStarted, setTimeStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);
    // const 

    const handleStartChalenge = () => {
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            console.log(dialog);
            dialog.current.showModal();
        }, targetTime * 1000)
        setTimeStarted(true);
    }

    const handleStopChallenge = () => {
        clearTimeout(timer.current);
    }


    return (
        <section className="challenge">
            <ResultModal ref={dialog} result="failed" targetTime={targetTime} />
            <h2>{title}</h2>
            {timeExpired ? 'nah, you"d lost' : ''}
            <p className="challenge-time">
                {targetTime} sencond{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeStarted ? handleStopChallenge : handleStartChalenge}>
                    Start Challenge
                </button>
            </p>
            <p className={timeStarted ? 'active' : ''}>
                {timeStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}