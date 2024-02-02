import React from 'react'
import { options } from '../../options'

import './../../App.scss'

const HandDisplay = ({ hand, type, runTimer }) => {
    let display;

    if (hand) {
        display = options.find((e) => (e.name === hand))
    }

    let mirror;
    if (type === 'computer' && hand === 'scissors') {
      mirror = 'mirror'
    }


  return (
    <div className={`${type}-hand ${mirror}`}>
        {runTimer && <div className={type==='computer' ? 'comp-shake' : 'player-shake'}>{options[0].icon}</div>}
        {display && display.icon}
        <p>{display && display.label}</p>
    </div>
  )
}

export default HandDisplay
