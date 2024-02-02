import React from 'react'
import { options } from '../../options'

import './../../App.scss'

const PlayerHand = ({ playerHand }) => {
    let display;

    if (playerHand) {
        display = options.find((e) => (e.name === playerHand))
    }


  return (
    <div className='player-hand'>
        {display && display.icon}
        <p>{display && display.label}</p>
    </div>
  )
}

export default PlayerHand
