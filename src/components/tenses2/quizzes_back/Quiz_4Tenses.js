import React, {useState} from 'react'
import quiz4data from "../../tenses2/data/quiz4data"
// import { v4 as uuidv4 } from 'uuid'
import Sidebar from '../../tenses2/Sidebar'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import { QuizzesMain, QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'

const Quiz4Tenses2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    // const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [name, setName] = useState('')

    // const handleCorrectAnswer = (isCorrect) => {
    //     if ( isCorrect) {
    //         setScore(score + 1)
    //     } 
    //     setClicked(true)

    // }

    const handleNextQuestion = () => {
        if (currentQuestion < quiz4data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }
   
    const correct = quiz4data[currentQuestion].correct

    const handleInput = event => {
        setName(event.target.value)
    }

    const checkAnswer = () => {
        if (name === correct) {
            alert('correct')
            setScore(score + 1)
        } else {
            alert('wrong')
        }
    }

    return (
        <>
        <div className='fatline'></div>
        <QuizzesPageMain>
            <Sidebar />
            <QuizzesMain>
            {showScore ? (
            <div>
                <ShowSideBar/>
                <div className="score-section">Your score: {score}/{quiz4data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz1" className='return'>Try Again</a>
                    <a href="/quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <ShowSideBar/>
                <div className="question-quiz1">
                    {quiz4data[currentQuestion].question1}
                    <input className='enter-input' onChange={handleInput} /> 
                    {quiz4data[currentQuestion].question2}
                </div>
                <button onClick={checkAnswer}>Check</button>                   
                <button className='next-btn' onClick={handleNextQuestion} >Next</button>                
            </>        
            )           
            }
            </QuizzesMain>
        </QuizzesPageMain>
        </>
    )
}

export default Quiz4Tenses2