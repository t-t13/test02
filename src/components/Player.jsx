import { useRef, useState } from "react";

export default function Player() {
  const [currentPlayerName, setCurrentPlayerName] = useState();
  const playerName = useRef();

  const handleChangeName = () => {
    setCurrentPlayerName(playerName.current.value);
    // playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {currentPlayerName ?? 'unknown player.'} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleChangeName}>Set Name</button>
      </p>
    </section>
  );
}
