import React from "react";

import { RockPaperScissors, Contact } from "./components";

function App() {
  return (
    <div className="rps-app">
      <RockPaperScissors />
      <Contact code="https://github.com/katieloesch/rock-paper-scissors-react" />
    </div>
  );
}

export default App;
