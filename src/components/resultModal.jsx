import { forwardRef } from "react";
const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {

    const youLost = timeRemaining <= 0;
    const formattedOfRemainingTime = (timeRemaining / 1000).toFixed(2);

    return (
        <dialog ref={ref} className="result-modal">
            {youLost && <h2> You lost</h2>}
            <p>
                The target time was <strong>{targetTime} second.</strong>
            </p>
            <p>
                You the timer with <strong> {formattedOfRemainingTime} second left.</strong>
            </p>
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;