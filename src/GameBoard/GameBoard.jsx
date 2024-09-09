import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({changeActivePlayer,activeSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectMarkPoint = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updateGameBoard = [...prevGameBoard.map(inPrev => [...inPrev])]
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