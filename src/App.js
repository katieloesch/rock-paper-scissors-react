import { useState } from 'react';
import BtnOption from './components/BtnOption/BtnOption';
import PlayerHand from './components/PlayerHand/PlayerHand';
import ComputerHand from './components/ComputerHand/ComputerHand';

import { options } from './options';

import './App.scss';

function App() {

  const [playerHand, setPlayerHand] = useState(null);
  const [computerHand, setComputerHand] = useState(null);

  const generateComputerHand = () => {
     setComputerHand(options[Math.floor(Math.random()*3)].name)
  }

  const play = () => {
    generateComputerHand();
    console.log(computerHand)

  }

  return (
    <div className="App">

      <div className='title-container'>
        <h1>Rock Paper Scissors</h1>
      </div>

      <div className='game-container'>
        
        <div className='computer-section'>
          <div className='computer-score'>
            <h3>Computer</h3>
            <p>Score: 0</p>
          </div> 

          <ComputerHand computerHand={computerHand} />

        </div>

        <div className='results-section'>
          <p className='results-winner'> Rock wins!</p>
          <p className='results-message'> Rock beats scissors!</p>
        </div>

        
        <div className='player-section'>
          <div className='player-score'>
            <h3>Player</h3>
            <p>score: 0</p>
          </div>

          <PlayerHand playerHand={playerHand} />
        </div>
      
      </div>

      <div className='btns-container'>
        <div className='btns-options-container'>
          {options.map((option) => {
            return (<BtnOption option={option.name} key={`btn-${option.name}`} setPlayerHand={setPlayerHand} playerHand={playerHand} />)
          })}
        </div>
        <div className='btns-play-container'>
          <button className='btn' id='btn-play' onClick={play}>Play</button>
        </div>
      </div>  
      
      
    </div>
  );
}

export default App;
