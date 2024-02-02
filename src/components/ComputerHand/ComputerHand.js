import React from 'react'
import { options } from '../../options'

import './../../App.scss'

const ComputerHand = ({ computerHand }) => {

    let display;

    if (computerHand) {
        display = options.find((e) => (e.name === computerHand))
    }

     

  return (
    <div className='computer-hand'>
        {display && display.icon}
        <p>{display && display.label}</p>
    </div>
  )
}

export default ComputerHand
