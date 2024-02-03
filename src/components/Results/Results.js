import React from 'react'
import './Results.scss'

const Results = ({timer, runTimer, results}) => {
  return (
    <div className='results-section'>
          {runTimer && <p className='timer'>{timer}</p>}
          {results && <p className='results-winner'> {results.winner}</p>}
          {results && <p className='results-message'>{results.msg}</p>}
    </div>
  )
}

export default Results
