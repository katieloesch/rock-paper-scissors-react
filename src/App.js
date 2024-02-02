import { useEffect, useState } from 'react';
import { options } from './options';

import ScoreDisplay from './components/ScoreDisplay/ScoreDisplay';
import HandDisplay from './components/HandDisplay/HandDisplay';
import BtnOption from './components/BtnOption/BtnOption';

import './App.scss';

function App() {

  const [playerHand, setPlayerHand] = useState(null);
  const [computerHand, setComputerHand] = useState(null);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false)
  const [results, setResults] = useState({
    winner: '',
    msg: ''
  })

  useEffect(() => {

    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer-1)
      }, 1000);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      play()
      console.log(results)
    }

  }, [runTimer, timer])

  const generateComputerHand = () => {
     setComputerHand(options[Math.floor(Math.random()*3)].name)
  }

  const start = () => {
    generateComputerHand();
    setRunTimer(true)

  }

  const play = () => {
  
    if (playerHand === 'rock' && computerHand === 'paper') {
      setResults({winner: 'Computer', msg: 'Paper beats Rock!'})
   
    } else if (playerHand === 'rock' && computerHand === 'scissors') {
      setResults({winner: 'Player', msg: 'Rock beats Scissors!'})

    } else if (playerHand === 'paper' && computerHand === 'rock') {
      setResults({winner: 'Player', msg: 'Paper beats Rock!'})

    } else if (playerHand === 'paper' && computerHand === 'scissors') {
      setResults({winner: 'Computer', msg: 'Scissors beat Paper!'})

    } else if (playerHand === 'scissors' && computerHand === 'rock') {
      setResults({winner: 'Computer', msg: 'Rock beats Scissors!'})

    } else if (playerHand === 'scissors' && computerHand === 'paper') {
      setResults({winner: 'Player', msg: 'Scissors beat Paper!'})

    } else {
      setResults({winner: 'No one', msg: 'Draw!'})
    }
  };

  return (
    <div className="App">

      <div className='title-container'>
        <h1>Rock Paper Scissors</h1>
      </div>

      <div className='game-container'>
        
        <div className='computer-section'>
          <ScoreDisplay type='computer' />
          <HandDisplay type='computer' hand={computerHand} runTimer={runTimer} />
        </div>

        <div className='results-section'>
          {runTimer && <p className='timer'>{timer}</p>}
          <p className='results-winner'> Rock wins!</p>
          <p className='results-message'> Rock beats scissors!</p>
        </div>

        <div className='player-section'> 
          <ScoreDisplay type='player' />
          <HandDisplay type='player' hand={playerHand} runTimer={runTimer} />
        </div>
      
      </div>

      <div className='btns-container'>

        <div className='btns-options-container'>
          {options.map((option) => {
            return (<BtnOption option={option.name} key={`btn-${option.name}`} setPlayerHand={setPlayerHand} playerHand={playerHand} />)
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
