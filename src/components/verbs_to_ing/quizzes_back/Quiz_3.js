import React, {useState} from 'react'
import quiz3data from "../data/quiz3data"
import { v4 as uuidv4 } from 'uuid'

const Quiz_3 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        } 
        setClicked(true)
        setShowExplanation(true)
    }
    
    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        if (currentQuestion < quiz3data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz3data.length}</div>
                <div className='showscore-btns'>
                    <a href="/verbs_to_ing_3" className='return'>Try Again</a>
                    <a href="/verbs_to_ing_4" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <div className='pronouns-title'>Verbs + ing / to + infinitive</div>
                <div className="question-quiz1">
                {currentQuestion + 1}. {quiz3data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz3data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : ""}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
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
                                    <p className='help-explanation'>{quiz3data[currentQuestion].help}</p>
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

export default Quiz_3