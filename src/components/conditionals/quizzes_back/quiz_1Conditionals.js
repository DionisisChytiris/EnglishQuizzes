import React, {useState} from 'react'
import quiz1data from "../data/quiz1data"
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { v4 as uuidv4 } from 'uuid'
import { AnswerContainer, Question, QuestionCounter, QuizzesMain, QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'

const Quiz1Conditionals = () => {
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
        setShowExplanation(!showExplanation)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        setWrongAnswer('')
        setShowInfo(!showInfo)
        if (currentQuestion < quiz1data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
        <div className='navLine'></div>
        <QuizzesPageMain>
            <SidebarGlobal title='Conditionals' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
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
                    <h1>Conditionals 1</h1>                    
                    <QuestionCounter>
                        Question {currentQuestion + 1} / {quiz1data.length}
                    </QuestionCounter>        
                    <Question>
                        {currentQuestion + 1}. {quiz1data[currentQuestion].question}  
                    </Question>
                    <AnswerContainer>
                        {quiz1data[currentQuestion].answersList.map((a) => (
                            <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                        ))}
                    </AnswerContainer>
                    <button onClick={handleNextQuestion}>Click me</button>
                </>        
                )           
                }
            </QuizzesMain>
        </QuizzesPageMain>
        </>
    )
}

export default Quiz1Conditionals


