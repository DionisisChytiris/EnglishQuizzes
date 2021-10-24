import React, {useState} from 'react'
import quiz0data from "../../articles/data/quiz0data"
import { v4 as uuidv4 } from 'uuid'

const Quiz_0Articles = () => {
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
        } else {
            setWrongAnswer('answer-quiz4 wrong')
        }
        setClicked(true)
        setShowExplanation(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        setWrongAnswer('')
        if (currentQuestion < quiz0data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz0data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz-9" className='return'>Try Again</a>
                    <a href="/quiz9" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <h5>Articles I</h5>
                <p>(Elementary)</p>
                {/* <div className="quiz4-count">
                    Question {currentQuestion + 1} of {quiz0data.length}
                    <br/>
                    Score {score} / {quiz0data.length}
                </div> */}
                <div className="question-quiz2">
                {currentQuestion + 1}.  {quiz0data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz0data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer-quiz2 ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
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
                                    <p className='help-explanation'>{quiz0data[currentQuestion].help}</p>
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

export default Quiz_0Articles

