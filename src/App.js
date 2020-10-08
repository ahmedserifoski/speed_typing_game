import React from 'react';
import useLogic from "./Components/useLogic"

import './App.css';

function App() {

  const [textareaRef, handleChange, text, timeIsRunning, timeRemaining, startGame, wordCount] = useLogic()

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
        ref={textareaRef}
        disabled={!timeIsRunning}
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        disabled={timeIsRunning}
        onClick={startGame}
      >Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
