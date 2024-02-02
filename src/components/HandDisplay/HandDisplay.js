import React from 'react'
import { options } from '../../options'

import './../../App.scss'

const HandDisplay = ({ hand, type }) => {
    let display;

    if (hand) {
        display = options.find((e) => (e.name === hand))
    }


  return (
    <div className={`${type}-hand`}>
        {display && display.icon}
        <p>{display && display.label}</p>
    </div>
  )
}

export default HandDisplay
