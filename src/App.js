import React, { useState } from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import * as Chess from "chess.js";

const { Configuration, OpenAIApi } = require("openai");

const App = () => {
  const [game, setGame] = useState(new Chess());
  const [history, setHistory] = useState([]);
  const [suggestion, setSuggestion] = useState("");

  // LLM Configuration (replace with your OpenAI API key)
  const configuration = new Configuration({
    apiKey: "your-openai-api-key", // Replace this with your OpenAI API Key
  });
  const openai = new OpenAIApi(configuration);

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const gameCopy = { ...game };

    if (gameCopy.move({ from: sourceSquare, to: targetSquare, promotion: "q" })) {
      setGame(gameCopy);
      setHistory(gameCopy.history());
    }
  };

  const getAIMove = async () => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You're playing chess with this FEN: ${game.fen()}. Suggest the best move in algebraic notation.`,
        max_tokens: 50,
      });

      const move = response.data.choices[0].text.trim();

      setSuggestion(move || "Couldn't suggest a move");
    } catch (error) {
      setSuggestion("Error fetching suggestion");
      console.error(error);
    }
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setHistory([]);
    setSuggestion("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess with LLM Helper</h1>
        <Chessboard
          position={game.fen()}
          onDrop={onDrop}
          draggablePieces={true}
        />
        <div>
          <button onClick={getAIMove}>Get AI Suggestion</button>
          <button onClick={resetGame}>Reset Game</button>
        </div>
        <div className="chess-info">
          <h2>Game History</h2>
          <ul>
            {history.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
          <h2>AI Suggestion</h2>
          <p>{suggestion}</p>
        </div>
      </header>
    </div>
  );
};

export default App;
```



####