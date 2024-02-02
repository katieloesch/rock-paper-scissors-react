import React from 'react'
import { options } from '../../options'
import './BtnOption.scss'

const BtnOption = ({ option, playerHand, setPlayerHand }) => {

    const display = options.find((e) => (e.name === option))
  

  return (
    <button className={`btn btn-option ${playerHand === option && 'selected'}`} id={option} onClick={() => setPlayerHand(option)}>
        {display.icon}
        {display.label}
    </button>
  )
}

export default BtnOption
