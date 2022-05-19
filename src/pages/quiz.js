import React from 'react';
import QuizLogic from '../hooks/Quiz.js'
import QuizTopTracksData from '../QuizTopTracksData'

  
const Quiz = () => {
  return (
    <div>
      <h1>Quiz</h1> 
      {/* <QuizLogic /> */} 
      <QuizTopTracksData />
    </div>
    
  );
};
  
export default Quiz;