import React, {useState} from 'react'
import quiz4data from "../../articles/data/quiz4data"
import { v4 as uuidv4 } from 'uuid'

const Quiz_4Articles = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)           
        }
        setClicked(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        if (currentQuestion < quiz4data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz4data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz12" className='return'>Try Again</a>
                    <a href="/quiz13" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <h5>Articles V</h5>
                <p>(a, an, the, -)</p>
                <div className="quiz4-count">
                    Question {currentQuestion + 1} of {quiz4data.length}
                    <br/>
                    Score {score} / {quiz4data.length}
                </div>
                <div className="question-quiz2">
                    {quiz4data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz4data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : ""}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                    ))}
                </div>
                <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                    
            </>        
            )           
            }
        </div>
    )
}

export default Quiz_4Articles


