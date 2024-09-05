export default function TabButton({ children, word }) {
    // this event is create when you click this component.
    const clickTabButton = () => {
        console.log("nah i'd win." + word);
    }

    return (
        <li>
            <button onClick={clickTabButton}> {children} </button>
        </li>
    );

}