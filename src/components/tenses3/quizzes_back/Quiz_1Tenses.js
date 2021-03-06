import React, {useState} from 'react'
import quiz1data from "../../tenses3/data/quiz1data"
import Timer from '../../../General Pages/Timer'
import { v4 as uuidv4 } from 'uuid'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'

const Quiz_1Tenses = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        } 
        setClicked(true)

        setTimeout(() => {
            if (isCorrect) {
                setCurrentQuestion(currentQuestion => currentQuestion + 1)
                setClicked(false)
            }
            if(!isCorrect) {
                setCurrentQuestion(currentQuestion => currentQuestion + 1)
                setClicked(false)               
            }
        }, 1000)
    }

    // const handleNextQuestion = () => {
    //     setClicked(false)
    //     if (currentQuestion < quiz1data.length - 1) {
    //         setCurrentQuestion(currentQuestion + 1)
    //     } else {
    //         setShowScore(true)
    //     }
    // }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <ShowSideBar/>
                <div className="score-section">Your score: {score}/{quiz1data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz1" className='return'>Try Again</a>
                    <a href="/quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <ShowSideBar/>
                <div className='timer'><Timer setShowScore={setShowScore} currentQuestion={currentQuestion} /></div>
                <div className="quiz4-count">
                    Question {currentQuestion + 1} of {quiz1data.length}
                    <br/>
                    Score {score} / {quiz1data.length}
                </div>
                <div className="question-quiz1">
                    {quiz1data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz1data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : ""}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                    ))}
                </div>
                {/* <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button> */}
                    
            </>        
            )           
            }
        </div>
    )
}

export default Quiz_1Tenses