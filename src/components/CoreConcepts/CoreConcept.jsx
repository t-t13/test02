import { CoreCard } from "../CoreCard/CoreCard";
import { CORE_CONCEPTS } from "../../data";
import { useState } from "react";

export function CoreConcepts() {
    const [num, setNum] = useState(0);

    const clickNumButton = (number) => {
        setNum(number);
    }

    return (
        <section id="core-concepts">
            <ul>
            {CORE_CONCEPTS.map((concept, index) => <CoreCard key={index} {...concept} />)}
            {/* <CoreCard {...CORE_CONCEPTS[num]} />
        <button onClick={() => clickNumButton(0)}> 1 </button>
        <button onClick={() => clickNumButton(1)}> 2 </button>
        <button onClick={() => clickNumButton(2)}> 3 </button>
        <button onClick={() => clickNumButton(3)}> 4 </button> */}
        </ul>
        </section>
    )
}