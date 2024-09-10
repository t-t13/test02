import Player from './components/Player.jsx';
import TimerChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="normal" targetTime={5}></TimerChallenge>
        <TimerChallenge title="hard" targetTime={10}></TimerChallenge>
        <TimerChallenge title="expert" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
