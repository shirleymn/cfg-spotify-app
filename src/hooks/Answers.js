import React from 'react';
import "../styles/hooks/Answers.css"

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((lAnswer, i) => (
            <li
            className=
            {
                props.correctAnswer === lAnswer ?
                'correct' : 
                props.clickedAnswer === lAnswer ? 
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(lAnswer)}
            key={lAnswer}>
                {props.answer[lAnswer]}
            </li>
        ));

        return (
            <>
                <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                    {answers}
                </ul>
                <div className='answer-output'>
                    {
                        props.correctAnswer ?
                        'Your answer is Correct!' : 
                        props.clickedAnswer ? `Your answer is Incorrect!` : ''
                    
                    }
                </div>
            </>
        );
}

export default Answer;