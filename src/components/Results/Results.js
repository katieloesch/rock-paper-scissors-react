import React from 'react';
import './Results.scss';

const Results = ({ timer, runTimer, results, screenSize }) => {
  return (
    <div className={`results-section ${screenSize} `}>
      {runTimer && <p className='timer'>{timer}</p>}
      {results && <p className='results-winner'> {results.winner}</p>}
      {results && <p className='results-message'>{results.msg}</p>}
    </div>
  );
};

export default Results;
