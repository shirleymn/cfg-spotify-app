import React from 'react';
import '../styles/hooks/Questions.css';


const Question = (props) => {
    return (
        <div className='question-text'>{props.question}
        </div>
        
    );
}

export default Question;