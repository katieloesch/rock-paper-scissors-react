import './App.scss';
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

function App() {

  const options = ['rock', 'paper', 'scissors']


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

          <div className='computer-hand'>
            <FaRegHandScissors size={60} />
            <p>Scissors</p>
          </div>
        </div>

        <div className='results-section'>
          <p className='results-winner'> Rock winst!</p>
          <p className='results-message'> Rock beats scissors!</p>
        </div>

        
        <div className='player-section'>
          <div className='player-score'>
            <h3>Player</h3>
            <p>score: 0</p>
          </div>

          <div className='player-hand'>
            <FaRegHandPaper size={60} />
            <p>Paper</p>
          </div>
        </div>
      
      </div>

      <div className='btns-container'>
        <div className='btns-options-container'>
          <button className='btn-option btn' id='rock'>
            <FaRegHandRock size={60} />
            Rock
          </button>

          <button className='btn-option btn' id='paper'>
            <FaRegHandPaper size={60} />
            Paper
          </button>

          <button className='btn-option btn' id='scissors'>
            <FaRegHandScissors size={60} />
            Scissors
          </button>
        </div>
        <div className='btns-play-container'>
          <button className='btn' id='btn-play'>Play</button>
        </div>
      </div>  
      
      
    </div>
  );
}

export default App;
