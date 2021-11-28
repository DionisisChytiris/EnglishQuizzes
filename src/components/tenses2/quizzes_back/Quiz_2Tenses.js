import React, {useState} from 'react'
import quiz2data from "../../tenses2/data/quiz2data"
import { v4 as uuidv4 } from 'uuid'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'

const Quiz_2Tenses = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState('')

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        if (!isCorrect) {
        setWrongAnswer('answer-quiz4 wrong')     
        }   
          
        setClicked(true)
        setShowExplanation(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        setWrongAnswer('')
        if (currentQuestion < quiz2data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <ShowSideBar/>
                <div className="score-section">Your score: {score}/{quiz2data.length}</div>
                <div className='showscore-btns'>
                    <a href="/tenses1quiz1" className='return'>Try Again</a>
                    <a href="/tenses1quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <ShowSideBar/>
                <h6>Tenses 1</h6>
                <p>Past Perfect / Past Perfect Continuous</p>
                <div className="quiz1-count">
                Question {currentQuestion + 1} / {quiz2data.length}
                </div>        
                <div className="question-quiz1">
                     {currentQuestion + 1}. {quiz2data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz2data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                    ))}
                </div>
                <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                {
                    showExplanation ? (
                        <div className="help-box">
                        <button className='help' onClick={() => setShowInfo(!showInfo)}> { showInfo ? 'Hide' : 'Show Explanation' }</button>
                        <div className="help-line"></div>
                                {
                                    showInfo &&
                                        <>
                                             <p className='help-explanation'>{quiz2data[currentQuestion].help}</p>
                                            <p className='help-explanation'>{quiz2data[currentQuestion].help1}</p>
                                        </>
                                }                         
                        </div>
                    ) : ''
                }                  
            </>        
            )           
            }
        </div>
    )
}

export default Quiz_2Tenses