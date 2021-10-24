import React, {useState, useEffect} from 'react'
import quiz1data from "../data/quiz1data"
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const Quiz_1Pronouns = () => {
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
        if (currentQuestion < quiz1data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    const pronounsExplanation = () => {
        alert(
            '\nSubject Pronouns:  I, you, he, she, it, we, you, they \nObject Pronouns:   me, you, his, her, it, us, you, them \nPossessive Pronouns:  mine, yours, his, hers, ours, yours, theirs\nReflexive Pronouns:  myself, yourself, himself, herself, itself, ourselves,   yourselves, themselves'
        )
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz1data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz1" className='return'>Try Again</a>
                    <a href="/quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <button className='pronouns-explanation' onClick={pronounsExplanation}><AiOutlineQuestionCircle/></button>
                <div className='pronouns-title'>Personal Pronouns</div>
                {/* <div className="quiz4-count">
                    Question {currentQuestion + 1} of {quiz1data.length}
                    <br/>
                    Score {score} / {quiz1data.length}
                </div> */}
                <div className="question-quiz1">
                {currentQuestion + 1}. {quiz1data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz1data[currentQuestion].answersList.map((a) => (
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

export default Quiz_1Pronouns