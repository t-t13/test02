import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function a (){
    console.log("hello world");
    
}

const b = (text)=>{
    console.log(text);
    
}

export default function GameBoard({ changeActivePlayer, activeSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectMarkPoint = (rowIndex, colIndex) => {
        // console.log("tests");
        
        // console.log(initialGameBoard);
        
        // let arr_a = initialGameBoard; 
        // let arr_b = {...initialGameBoard};

        // console.log(arr_a);
        // console.log(arr_b);
        
        // arr_b[3][0] = "B"
        // console.log(arr_a);
        // console.log(arr_b);
        // console.log(initialGameBoard);
    
        setGameBoard((prevGameBoard) => {
            const updateGameBoard = [...prevGameBoard.map((inPrev) =>
                [...inPrev])]
            updateGameBoard[rowIndex][colIndex] = activeSymbol;
            return updateGameBoard;
        });

        changeActivePlayer();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((rowBoard, rowBoardIndex) => <li key={rowBoardIndex}>
                <ol>
                    {/* <button> {rowBoard} </button> */}
                    {rowBoard.map((colBoard, colBoardIndex) => <li key={colBoardIndex}> <button onClick={() => handleSelectMarkPoint(rowBoardIndex, colBoardIndex)}>{colBoard}</button> </li>)}
                </ol>
            </li>)}
        </ol>
    )
}