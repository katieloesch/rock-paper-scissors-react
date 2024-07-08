import React from "react";
import { options, fist } from "../../options";

import "./HandDisplay.scss";

const HandDisplay = ({ hand, type, runTimer }) => {
  let display;
  let icon;
  let label;

  if (hand) {
    display = options.find((e) => e.name === hand);
    icon = display.icon;
    label = display.label;

    if (type === "computer" && hand === "scissors") {
      icon = display.iconMirror;
    }
    if (type === "player" && hand === "rock") {
      icon = display.iconMirror;
    }
  }

  return (
    <div className={`hand-display ${type}-hand`}>
      {runTimer && (
        <div className={type === "computer" ? "comp-shake" : "player-shake"}>
          {fist.icon}
        </div>
      )}
      <p>{runTimer && " "}</p>
      {!runTimer && display && icon}
      <p>{!runTimer && display && label}</p>
    </div>
  );
};

export default HandDisplay;
