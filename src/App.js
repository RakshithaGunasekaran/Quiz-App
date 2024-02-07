
import './App.css';
import React, {useState} from "react";
import MainMenu from "./QuizApp/MainMenu";
import Quiz from "./QuizApp/Quizzz";
import EndScreen from "./QuizApp/EndScreen";
import { QuizContext } from "./Helpers/Contexts" 

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return(
    <div className="App">
      <h1>Quiz App</h1>
<QuizContext.Provider value={{gameState, setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu></MainMenu>}
      {gameState === "quiz" && <Quiz></Quiz>}
      {gameState === "endScreen" && <EndScreen></EndScreen>}
      </QuizContext.Provider>
    </div>
  )
}
export default App;
