import React, { useState } from "react";
import questions from "./questions"; // Replace with your actual data import

const QuizApp = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(Array(questions.length).fill(false));

  const hasNext = questionNumber < questions.length - 1;
  const hasPrev = questionNumber > 0;

  const HandleOption = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionNumber] = answer.answer;
    setSelectedAnswers(updatedAnswers);
  };

  const HandleNext = () => {
    checkAnswer();
    setQuestionNumber((prev) => prev + 1);
  };

  const HandlePrevious = () => {
    setQuestionNumber((prev) => prev - 1);
  };

  const HandleReset = () => {
    setQuestionNumber(0);
    setScore(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setAnsweredCorrectly(Array(questions.length).fill(false));
    setShowScore(false);
  };

  const HandleSubmit = () => {
    checkAnswer();
    setShowScore(true);
  };

  const checkAnswer = () => {
    const currentAnswer = selectedAnswers[questionNumber];
    const isCorrect = questions[questionNumber].answers.find(a => a.answer === currentAnswer)?.isCorrect;

    if (isCorrect && !answeredCorrectly[questionNumber]) {
      const updated = [...answeredCorrectly];
      updated[questionNumber] = true;
      setAnsweredCorrectly(updated);
      setScore(prev => prev + 1);
    }
  };

  const buttonStyle = (disabled) => ({
    margin: '8px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: disabled ? '#ccc' : '#4B0082',
    color: disabled ? '#666' : '#fff',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: '0.3s'
  });

  const optionButtonStyle = (isSelected) => ({
    marginBottom: '12px',
    padding: '12px',
    width: '100%',
    border: `2px solid ${isSelected ? '#4B0082' : '#ccc'}`,
    borderRadius: '8px',
    backgroundColor: isSelected ? '#e0e0ff' : '#fff',
    cursor: 'pointer',
    transition: '0.3s',
    textAlign: 'left',
    fontSize: '16px'
  });

  return (
    <div className='app' style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#f5f5fa',
      boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#4B0082', textAlign: 'center' }}>🎯 Quiz App</h1>

      {showScore ? (
        <div className='score-section' style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2 style={{ color: '#2E8B57' }}>You scored {score} out of {questions.length}</h2>
        </div>
      ) : (
        <>
          <div key={questions[questionNumber].id} className='question-section'>
            <h3 style={{ color: '#ff5722' }}>Category: {questions[questionNumber].category}</h3><br />
            <div>
              <h2 style={{ color: '#333' }}>{questionNumber + 1}. {questions[questionNumber].question}</h2>
            </div>

            <div className='Options' style={{ marginTop: '20px' }}>
              {questions[questionNumber].answers.map((a, index) => (
                <button
                  key={index}
                  onClick={() => HandleOption(a)}
                  style={optionButtonStyle(selectedAnswers[questionNumber] === a.answer)}
                >
                  {a.answer}
                </button>
              ))}
            </div>
          </div>

          <div className='navigation-buttons' style={{ marginTop: '30px', textAlign: 'center' }}>
            <button onClick={HandlePrevious} disabled={!hasPrev} style={buttonStyle(!hasPrev)}>Previous</button>
            <button onClick={HandleNext} disabled={!hasNext} style={buttonStyle(!hasNext)}>Next</button>
            <button onClick={HandleReset} style={buttonStyle(false)}>Restart Quiz</button>
            <button onClick={HandleSubmit} disabled={hasNext} style={buttonStyle(hasNext)}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
