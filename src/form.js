import React,{ useState} from "react";
import questions from './questions';

const QuizApp = () => {
    const [questionNumber,setQuestionNumber] = useState(0);
    const [selectedAnswers,setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [score,setScore] = useState(0);
    const [showScore,setShowScore] = useState(false);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(Array(questions.length).fill(false)); // Track answered questions

    let hasNext = questionNumber < questions.length - 1;
    let hasPrev = questionNumber > 0;

    const HandleOption = (answer) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionNumber] = answer.answer; // Save the selected answer
        setSelectedAnswers(updatedAnswers);
    };

    const HandleNext = () => {
        if (hasNext) {
            if (selectedAnswers[questionNumber] && questions[questionNumber].answers.find(a => a.answer === selectedAnswers[questionNumber]).isCorrect) {
                if (!answeredCorrectly[questionNumber]) {
                    setScore(prevScore => prevScore + 1);
                    setAnsweredCorrectly(prev => {
                        const newAnswered = [...prev];
                        newAnswered[questionNumber] = true; // Mark this question as answered correctly
                        return newAnswered;
                    });
                }    
            }
            setQuestionNumber(questionNumber + 1);
        }
    };

    const HandlePrevious = () => {
       if(hasPrev){
        if(selectedAnswers[questionNumber] !== null){
            setScore(score);
        }
        setQuestionNumber(questionNumber - 1);
       }
    };

    const HandleReset = () => {
        setQuestionNumber(0);
        setScore(0);
        setSelectedAnswers(Array(questions.length).fill(null));
        setShowScore(false);
    };

    const HandleSubmit =() => {
        if (selectedAnswers[questionNumber] && questions[questionNumber].answers.find(a => a.answer === selectedAnswers[questionNumber]).isCorrect) {
            if (!answeredCorrectly[questionNumber]) {
                setScore(prevScore => prevScore + 1);
                setAnsweredCorrectly(prev => {
                    const newAnswered = [...prev];
                    newAnswered[questionNumber] = true; // Mark this question as answered correctly
                    return newAnswered;
                });
            }
        }
        setShowScore(true);
    };
    
return(
     <div className='app'>
       <h1>Quiz</h1>
       {showScore ? (<div className='score-section'><h2>You scored {score} out of {questions.length}</h2></div>):  
       (<><div key={questions[questionNumber].id} className='question-section'>
            <h2>Category : {questions[questionNumber].category}</h2>
           <div><h2>{questionNumber + 1}. {questions[questionNumber].question}</h2></div>
           <div className='Options'>
           {questions[questionNumber].answers.map((a,index) => (
            <div key={index} style={{marginBottom: '10px',marginLeft: '20px'}}>  
            <label><input type='radio' id={index} name={index} value={a.answer} checked={(selectedAnswers[questionNumber] === a.answer)} onClick={()=>HandleOption(a)} />
            <span> {a.answer}</span><br />
                </label></div>
            ))}</div>
            </div>
            <div className='navigation-buttons'>
       <button onClick={HandlePrevious} disabled={!hasPrev}>Previous</button>
       <button onClick={HandleNext} disabled={!hasNext}>Next</button> 
       <button onClick={HandleReset}>Restart Quiz</button>
       <button onClick={HandleSubmit} disabled={hasNext}>Submit</button>
       </div>
        </>)}
     </div>
);
}
export default QuizApp;