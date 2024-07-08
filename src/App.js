import "./App.scss";
import { RockPaperScissors, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <RockPaperScissors />
      <Contact code="https://github.com/katieloesch/rock-paper-scissors-react" />
    </div>
  );
}

export default App;
