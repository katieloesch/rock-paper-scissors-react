import React from "react";
import "./ScoreDisplay.scss";

const ScoreDisplay = ({ type, score, label }) => {
  return (
    <div className={`score-display ${type}-score`}>
      <h3>{label} :</h3>
      <p>{score}</p>
    </div>
  );
};

export default ScoreDisplay;
