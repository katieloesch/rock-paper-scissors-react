import React, { useEffect, useState } from 'react';

import { options } from '../../assets/icons/options';
import { GameBtns, HandDisplay, Results, ScoreDisplay } from '../../components';
import './RockPaperScissors.scss';

const RockPaperScissors = () => {
  const [score, setScore] = useState({
    computer: 0,
    player: 0,
  });

  const [computerHand, setComputerHand] = useState(null);
  const [playerHand, setPlayerHand] = useState(null);
  const [runTimer, setRunTimer] = useState(false);
  const [timer, setTimer] = useState(3);
  const [results, setResults] = useState(null);
  const [selectedHand, setSelectedHand] = useState(null);

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      play();
    }
  }, [runTimer, timer]);

  const generateComputerHand = () => {
    setComputerHand(options[Math.floor(Math.random() * 3)].name);
  };

  const start = () => {
    if (selectedHand) {
      setResults(null);
      setPlayerHand(selectedHand);
      generateComputerHand();
      setRunTimer(true);
    }
  };

  const play = () => {
    if (playerHand === 'rock' && computerHand === 'paper') {
      setResults({ winner: 'Computer wins!', msg: 'Paper beats Rock!' });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (playerHand === 'rock' && computerHand === 'scissors') {
      setResults({ winner: 'Player wins!', msg: 'Rock beats Scissors!' });
      setScore({ ...score, player: score.player + 1 });
    } else if (playerHand === 'paper' && computerHand === 'rock') {
      setResults({ winner: 'Player wins!', msg: 'Paper beats Rock!' });
      setScore({ ...score, player: score.player + 1 });
    } else if (playerHand === 'paper' && computerHand === 'scissors') {
      setResults({ winner: 'Computer wins!', msg: 'Scissors beat Paper!' });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (playerHand === 'scissors' && computerHand === 'rock') {
      setResults({ winner: 'Computer wins!', msg: 'Rock beats Scissors!' });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (playerHand === 'scissors' && computerHand === 'paper') {
      setResults({ winner: 'Player wins!', msg: 'Scissors beat Paper!' });
      setScore({ ...score, player: score.player + 1 });
    } else {
      setResults({ winner: 'Draw!', msg: '' });
    }
  };

  return (
    <div className='rock-paper-scissors'>
      <div className='title-container'>
        <h1>Rock Paper Scissors</h1>
      </div>

      <div className='game-container'>
        <section className='computer-section'>
          <ScoreDisplay
            type='computer'
            score={score.computer}
            label='Computer'
          />
          <HandDisplay
            type='computer'
            hand={computerHand}
            runTimer={runTimer}
          />
        </section>

        <Results
          timer={timer}
          runTimer={runTimer}
          results={results}
          screenSize='large-screen'
        />

        <section className='player-section'>
          <ScoreDisplay type='player' score={score.player} label='Player' />
          <HandDisplay type='player' hand={playerHand} runTimer={runTimer} />
        </section>
      </div>

      <Results
        timer={timer}
        runTimer={runTimer}
        results={results}
        screenSize='mobile'
      />

      <div className='btns-container'>
        <GameBtns
          setPlayerHand={setPlayerHand}
          playerHand={playerHand}
          setComputerHand={setComputerHand}
          setSelectedHand={setSelectedHand}
          selectedHand={selectedHand}
          start={start}
        />
      </div>
    </div>
  );
};

export default RockPaperScissors;
