import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of Italy?",
      answerOptions: [
        { answerText: "Milan", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Rome", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Amazon?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: true },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Australia?",
      answerOptions: [
        { answerText: "Canberra", isCorrect: true },
        { answerText: "Melbourbe", isCorrect: false },
        { answerText: "Sydney", isCorrect: false },
        { answerText: "Viktoria", isCorrect: false },
      ],
    },
    {
      questionText: "React was created by:",
      answerOptions: [
        { answerText: "Samsung", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Goolge", isCorrect: false },
        { answerText: "Faceboook", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answer) => (
              <button onClick={() => handleAnswerButtonClick(answer.isCorrect)}>
                {answer.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
