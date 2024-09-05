export default function TabButton({ children, word, onClickThisBut, isSelected }) {

     // for check a re render of this component that has a state is changed.
     console.log("CREATE or RE-RENDER TabButton comp.");
     

    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onClickThisBut}> {children} </button>
        </li>
    );
    
}