import { useEffect, useState } from 'react';
import { options } from './options';

import ScoreDisplay from './components/ScoreDisplay/ScoreDisplay';
import HandDisplay from './components/HandDisplay/HandDisplay';
import BtnOption from './components/BtnOption/BtnOption';

import './App.scss';
import Results from './components/Results/Results';

function App() {

  const [playerHand, setPlayerHand] = useState(null);
  const [selectedHand, setSelectedHand] = useState(null);
  const [computerHand, setComputerHand] = useState(null);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [results, setResults] = useState(null);
  const [score, setScore] = useState({
    computer: 0,
    player: 0
  });

  useEffect(() => {

    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer-1)
      }, 1000);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      play();
    }

  }, [runTimer, timer])

  const generateComputerHand = () => {
     setComputerHand(options[Math.floor(Math.random()*3)].name)
  }

  const start = () => {

    if (selectedHand) {
      setResults(null)
      setPlayerHand(selectedHand)
      generateComputerHand();
      setRunTimer(true)
    }


  }

  const play = () => {
  
    if (playerHand === 'rock' && computerHand === 'paper') {
      setResults({winner: 'Computer wins!', msg: 'Paper beats Rock!'})
   
    } else if (playerHand === 'rock' && computerHand === 'scissors') {
      setResults({winner: 'Player wins!', msg: 'Rock beats Scissors!'})

    } else if (playerHand === 'paper' && computerHand === 'rock') {
      setResults({winner: 'Player wins!', msg: 'Paper beats Rock!'})

    } else if (playerHand === 'paper' && computerHand === 'scissors') {
      setResults({winner: 'Computer wins!', msg: 'Scissors beat Paper!'})

    } else if (playerHand === 'scissors' && computerHand === 'rock') {
      setResults({winner: 'Computer wins!', msg: 'Rock beats Scissors!'})

    } else if (playerHand === 'scissors' && computerHand === 'paper') {
      setResults({winner: 'Player wins!', msg: 'Scissors beat Paper!'})

    } else {
      setResults({winner: 'Draw!', msg: ''})
    }
  };

  return (
    <div className="App">

      <div className='title-container'>
        <h1>Rock Paper Scissors</h1>
      </div>

      <div className='game-container'>
        
        <div className='computer-section'>
          <ScoreDisplay type='computer' score={score.computer} />
          <HandDisplay type='computer' hand={computerHand} runTimer={runTimer} />
        </div>

        <Results timer={timer} runTimer={runTimer} results={results} />

        <div className='player-section'> 
          <ScoreDisplay type='player' score={score.player} />
          <HandDisplay type='player' hand={playerHand} runTimer={runTimer} />
        </div>
      
      </div>

      <div className='btns-container'>

        <div className='btns-options-container'>
          {options.map((option) => {
            return (<BtnOption
              option={option.name}
              key={`btn-${option.name}`}
              setPlayerHand={setPlayerHand}
              playerHand={playerHand}
              setComputerHand={setComputerHand}
              setSelectedHand={setSelectedHand}
              selectedHand={selectedHand}/>)
          })}
        </div>

        <div className='btns-play-container'>
          <button className='btn' id='btn-play' onClick={start}>Play</button>
        </div>

      </div>  
      
    </div>
  );
}

export default App;
