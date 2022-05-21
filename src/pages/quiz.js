
import React, { useState } from 'react';
import QuizLogic from '../hooks/Quiz.js'
import QuizTopTracksData from '../QuizTopTracksData'

export const questions = ["What was your top track in the last 4 weeks?", "What was your top track in the last 6 months?", "What was your top track of all time?", "Who was your most played artist last month?"]

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0)
  // Anytime the user clicks a button (selects an answer) the question number will be incremented and the user will go onto the next question
  const handleAnswerButtonClick = (isCorrect) => {
      if(isCorrect===true){
          setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if(nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion);
      } else{
          setShowScore(true) // once the user has reached the end of the quiz the score panel will be displayed to the user by changing the set variable setShowScore from false to true causing react to re-render
      }
  }
  
  return (
    <div>
      <h1>Quiz</h1> 
      <p>Discover how in tune you are with your music history</p>
      <div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1} </span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion]}</div>
					</div>
      {/* <QuizLogic /> */} 
      <QuizTopTracksData />
      <br/>
      {/* <p>Question 2 of 2</p>
      <p> Who was your top artist in the last 4 weeks? </p> */}
 
    

    </div>
    
  );
};
  
export default Quiz;