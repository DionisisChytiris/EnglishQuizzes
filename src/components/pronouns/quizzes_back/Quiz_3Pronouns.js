import React, {useState} from 'react'
import quiz3data from "../data/quiz3data"
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

const Quiz_3Pronouns = () => {
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

    const pronounsExplanation = () => {
        alert(
            '\nwho (subject), only for people\nwhom (object), only for people\nwhose,  for possession\nwhich, for things\nthat, for things (also, for people only in defining relative clauses) \n\nRelative clauses give more information about a person, thing or situation.'
        )
    }

    
    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz3data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz1" className='return'>Try Again</a>
                    <a href="/quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <button className='pronouns-explanation' onClick={pronounsExplanation}><AiOutlineQuestionCircle/></button>
                <div className='pronouns-title'>Relative Pronouns</div>
                <div className="question-quiz1">
                    {quiz3data[currentQuestion].question}  
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

export default Quiz_3Pronouns