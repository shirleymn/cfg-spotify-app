import React, {Component} from 'react';
import Question from './Questions';
import Answer from './Answers';
import '../styles/hooks/QuizMain.css';
import {BsFillArrowRightSquareFill} from "react-icons/bs"

export default class Quiz extends Component {

    // questions, answers and inital state
    state = {
        quiestions: {
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
        correctAnswers: {
            1: '2',
            2: '1',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // code logic that checks whether the user has selected the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // code logic to move onto the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    // attempted code to add current question number and total questions
    // questionNumber = (state) => {

    //     for (const [key] of Object.entries(state.quiestions)) {
    //     return `${key}`
    //     }

    // }

    // bject.keys.quiestions

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                  <h1 className='quiz-title'>Quiz</h1>
                 <p className='quiz-subheading'>Discover how in tune you are with your music taste</p>
                 {/* <div className='question-count'>
							<span> Question {Object.keys(quiestions).indexOf(quiestions)} </span>/ {Object.keys(quiestions).length}
						</div> */}
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <BsFillArrowRightSquareFill
                        className="next-question"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}/>
                    </>) : (
                        <div className='score-section'>You have scored <br></br> {score} / {Object.keys(quiestions).length}
                            <p className='user-prompt'>Want to know more? <br></br> Go see your top tracks and artists!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}