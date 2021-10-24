import React, {useState} from 'react'
import quiz2data from "../data/quiz2data"
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const Quiz_2Pronouns = () => {
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
        if (currentQuestion < quiz2data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    const pronounsExplanation = () => {
        alert(
            '\nDemonstrative Pronouns:  \n\nthis, these (near in distance or time) \nthat, those (far in distance or time)'
        )
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz2data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz1" className='return'>Try Again</a>
                    <a href="/quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <button className='pronouns-explanation1' onClick={pronounsExplanation}><AiOutlineQuestionCircle/></button>
                <div className='pronouns-title'>Demonstrative Pronouns</div>
                <div className="question-quiz1">
                    {quiz2data[currentQuestion].question}  <br/>
                    {quiz2data[currentQuestion].question1}  
                </div>
                <div className="answers-quiz4">
                    {quiz2data[currentQuestion].answersList.map((a) => (
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
                                    <p className='help-explanation'>{quiz2data[currentQuestion].help}</p>
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

export default Quiz_2Pronouns