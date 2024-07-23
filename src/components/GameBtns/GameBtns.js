import React from "react";
import BtnOption from "../BtnOption/BtnOption";
import { options } from "../../assets/icons/options";
import "./GameBtns.scss";

const GameBtns = ({
  setPlayerHand,
  setComputerHand,
  playerHand,
  selectedHand,
  setSelectedHand,
  start,
}) => {
  return (
    <div>
      <div className="btns-options-container">
        {options.map((option) => {
          return (
            <BtnOption
              option={option.name}
              key={`btn-${option.name}`}
              setPlayerHand={setPlayerHand}
              playerHand={playerHand}
              setComputerHand={setComputerHand}
              setSelectedHand={setSelectedHand}
              selectedHand={selectedHand}
            />
          );
        })}
      </div>

      <div className="btns-play-container">
        <button
          className={`btn-play ${selectedHand ? "active" : "disabled"}`}
          onClick={start}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default GameBtns;
