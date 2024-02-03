import React from 'react'
import { options } from '../../options'
import './BtnOption.scss'

const BtnOption = ({ option, playerHand, setPlayerHand, setComputerHand, setSelectedHand, selectedHand }) => {

    const display = options.find((e) => (e.name === option))
    const label = display.label
    let icon;

      if (option === 'rock') {
        icon = display.iconBtn
      } else {
        icon = display.icon;
      }

    const handleOptionClick = () => {
      setComputerHand(null)
      setPlayerHand(null)
      setSelectedHand(option)
    }
  

  return (
    <button className={`btn btn-option ${selectedHand === option && 'selected'}`} id={option} onClick={handleOptionClick}>
        {icon}
        {label}
    </button>
  )
}

export default BtnOption
