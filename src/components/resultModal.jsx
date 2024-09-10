import { forwardRef } from "react";
const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2> You {result}</h2>
            <p>
                The target time was <strong>{targetTime} second.</strong>
            </p>
            <p>
                You the timer with <strong> x second left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;