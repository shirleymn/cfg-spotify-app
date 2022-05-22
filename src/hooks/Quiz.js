import React, { useState } from 'react';

const QuizLogic = () => {
	const questions = [
		{
			questionText: 'This is Question 1?',
			answerOptions: [
				{ answerText: 'Answer 1', isCorrect: false },
				{ answerText: 'Answer 2', isCorrect: false },
				{ answerText: 'Answer 3', isCorrect: true },
				{ answerText: 'Answer 4', isCorrect: false },
			],
		},
		{
			questionText: 'This is Question 2?',
			answerOptions: [
				{ answerText: 'Answer_1', isCorrect: false },
				{ answerText: 'Answer_2', isCorrect: true },
				{ answerText: 'Answer_3', isCorrect: false },
				{ answerText: 'Answer_4', isCorrect: false },
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
                            <button onClick = {() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}

export default QuizLogic;