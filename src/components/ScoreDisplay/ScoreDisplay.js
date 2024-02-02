import React from 'react'

const ScoreDisplay = ({ type, score }) => {

    let label;
    if (type === 'computer') {
        label = 'Computer'
    } else {
        label = 'Player'
    }

  return (
    <div className={`${type}-score`}>
        <h3>{label}</h3>
        <p>Score: 0</p>
    </div> 
  )
}

export default ScoreDisplay
