import React, { useState } from 'react';
import '../styles/pages/quiz.css';


const QuizLogic = () => {
	const questions = [
		{
			questionText: 'Who was your top artist in the last 4 weeks?',
			answerOptions: [
				{ answerText: 'Kanye West', isCorrect: false },
				{ answerText: 'Beyonce', isCorrect: false },
				{ answerText: 'Ella Mai', isCorrect: true },
				{ answerText: 'Kehlani', isCorrect: false },
			],
		},
		{
			questionText: 'What was your top track in the last 4 weeks?',
			answerOptions: [
				{ answerText: 'Savage(remix)', isCorrect: false },
				{ answerText: 'Mad at me', isCorrect: true },
				{ answerText: 'Levitate', isCorrect: false },
				{ answerText: 'Hrs and Hrs', isCorrect: false },
			],
		},
		
	];

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
		<div className='app'>
      <h1 className='quiz-title'>Quiz</h1>
      <p className='quiz-subheading'>Discover how in tune you are with your music taste</p>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1} </span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => 
                            <button className='option-button' onClick = {() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}

export default QuizLogic;