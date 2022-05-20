import React from 'react';
import QuizLogic from '../hooks/Quiz.js'
import QuizTopTracksData from '../QuizTopTracksData'

  
const Quiz = () => {
  return (
    <div>
      <h1>Quiz</h1> 
      <p>Discover how in tune you are with your music history</p>
      <p>Question 1 of 2</p>
      <p> What was your top track in the last 4 weeks? </p>
      {/* <QuizLogic /> */} 
      <QuizTopTracksData />
      <br/>
      {/* <p>Question 2 of 2</p>
      <p> Who was your top artist in the last 4 weeks? </p> */}
 
    

    </div>
    
  );
};
  
export default Quiz;