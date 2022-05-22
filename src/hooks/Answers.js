import React from 'react';
import "../styles/hooks/Answers.css"

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((userAnswer, i) => (
            <li
            className=
            {
                props.correctAnswer === userAnswer ?
                'correct' : 
                props.chosenAnswer === userAnswer ? 
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(userAnswer)}
            key={userAnswer}>
                {props.answer[userAnswer]}
            </li>
        ));

        return (
            <>
                <ul disabled={props.chosenAnswer ? true : false} className="Answers">
                    {answers}
                </ul>
                <div className='answer-output'>
                    {
                        props.correctAnswer ?
                        'Answer is Correct!' : 
                        props.chosenAnswer ? `Answer is Incorrect!` : ''
                    
                    }
                </div>
            </>
        );
}

export default Answer;