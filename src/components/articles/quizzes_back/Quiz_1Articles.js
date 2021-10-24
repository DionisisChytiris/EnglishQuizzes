import React, {useState} from 'react'
import quiz1data from "../../articles/data/quiz1data"
import { v4 as uuidv4 } from 'uuid'

const Quiz_1Articles = () => {
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
        }else {
            setWrongAnswer('answer-quiz4 wrong')
        }
        setClicked(true)
        setShowExplanation(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        setWrongAnswer('')
        if (currentQuestion < quiz1data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz1data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz9" className='return'>Try Again</a>
                    <a href="/quiz10" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <h5>Articles II</h5>
                <p>(Intermediate)</p>
                <div className="question-quiz2">
                {currentQuestion + 1}.  {quiz1data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz1data[currentQuestion].answersList.map((a) => (
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
                                    <p className='help-explanation'>{quiz1data[currentQuestion].help}</p>
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

export default Quiz_1Articles


