import { useState } from "react"

export default function Player({ playerName, symbol, isActive }) {
    const [isEditting, setIsEditting] = useState(false);
    const [isPlayerName, setIsPlayerName] = useState(playerName);

    const handleEditClick = () => {

        // setIsEditting(!isEditting)// schedule state update is true .
        // setIsEditting(!isEditting)// schedule state update is true at the same time.

        setIsEditting((isEditting) => !isEditting); // schedule state update is true. 
        // setIsEditting((isEditting)=> !isEditting); 
        // schedule state update is false 
        // because this function in this form in react that make react is atomatically for get latest state value. 

        // if (isEditting == false){

        // }

    }

    const handleChangeName = (event) => {
        // setIsPlayerName(event.target.value);
        setIsPlayerName((name) => console.log(name)
        )
    }

    let textButton = "edit";
    let playerNameComp = <span className="player-name">{isPlayerName}</span>

    if (isEditting) {
        textButton = "save";
        playerNameComp = <input type="text" required value={isPlayerName} onChange={handleChangeName} />;

    }

    return (
        <li className={isActive? 'active' : undefined}  >
            <span className="player"> {playerNameComp}
                <span className="player-symbol"> {symbol} </span>
            </span>
            <button onClick={handleEditClick} > {textButton} </button>
        </li>
    )
}