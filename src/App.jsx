import GameBoard from "./GameBoard/GameBoard"
import Player from "./Player/player"
import { useState } from "react"


function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectMarkPoint = () => {
    setActivePlayer((curActivevPlayer) => curActivevPlayer === 'X' ? 'O' : 'X' 
    )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName="player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player playerName="player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard changeActivePlayer={handleSelectMarkPoint} activeSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
