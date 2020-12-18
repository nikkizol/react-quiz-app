import React, { useState } from "react";

function App() {
  return (
    <div className="app">
      {false ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
              This is where the question text should go
            </div>
          </div>
          <div className="answer-section">
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
