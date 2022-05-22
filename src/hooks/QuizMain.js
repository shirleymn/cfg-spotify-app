import React, {Component} from 'react';
import Question from './Questions';
import Answer from './Answers';
import '../styles/hooks/QuizMain.css';
import {BsFillArrowRightSquareFill} from "react-icons/bs"

export default class Quiz extends Component {

    // initiating the local state
    state = {
        questions: {
            1: 'Who was your top artist in the last 4 weeks?',
            2: 'What was your top track in the last 4 weeks?',
        },
        answers: {
            1: {
                1: 'Kanye West',
                2: 'Ella Mai',
                3: 'Kelhani',
                4: 'Beyonce'
            },
            2: {
                1: 'Mad at Me',
                2: 'Hrs and Hrs',
                3: 'Savage',
                4: 'Levitate'
            },
        }, 
        rightAnswer: {
            1: '2',
            2: '1',
        },
        correctAnswer: 0,
        selectedAnswer: 0,
        increment: 1,
        totalScore: 0
    }

    // this is a code logic that determines whether or not the answer is correct depending on the users response
    checkAnswer = answer => {
        const { rightAnswer, increment, totalScore } = this.state;
        if(answer === rightAnswer[increment]){
            this.setState({
                totalScore: totalScore + 1,
                correctAnswer: rightAnswer[increment],
                selectedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                selectedAnswer: answer
            });
        }
    }

    // this is the logic to move to the next questions once the first question is completed
    nextincrement = (increment) => {
        this.setState({
            increment: increment + 1,
            correctAnswer: 0,
            selectedAnswer: 0
        });
    }

    // Attempted code to try display the question number on the quiz page
    // questionNumber = (state) => {

    //     for (const [key] of Object.entries(state.questions)) {
    //     return `${key}`
    //     }

    // }

    // bject.keys.questions

    render(){
        let { questions, answers, correctAnswer, selectedAnswer, increment, totalScore } = this.state;
        return(
            <div className="Content">
                  <h1 className='quiz-title'>Quiz</h1>
                 <p className='quiz-subheading'>Discover how in tune you are with your music taste</p>
                 {/* Attempted code implementation to intergrate the display of the current question and the total number of questions to the user */}
                 {/* <div className='question-count'>
							<span> Question {Object.keys(questions).indexOf(questions)} </span>/ {Object.keys(questions).length}
						</div> */}
                {increment <= Object.keys(questions).length ? 
                    (<>
                        <Question
                            question={questions[increment]}
                        />
                        <Answer
                            answer={answers[increment]}
                            increment={increment}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            selectedAnswer={selectedAnswer}
                        />
                        <BsFillArrowRightSquareFill
                        className="next-question"
                        disabled={
                            selectedAnswer && Object.keys(questions).length >= increment
                            ? false : true
                        }
                        onClick={() => this.nextincrement(increment)}/>
                    </>) : (
                        <div className='totalScore-section'>You have scored <br></br> {totalScore} / {Object.keys(questions).length}
                            <p className='user-prompt'>Want to know more? <br></br> Go see your top tracks and artists!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}