export default function TabButton({ children, word, onClickThisBut }) {

    return (
        <li>
            <button onClick={onClickThisBut}> {children} </button>
        </li>
    );

}