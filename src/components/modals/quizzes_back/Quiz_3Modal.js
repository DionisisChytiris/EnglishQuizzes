import React, {useState} from 'react'
import quiz3data from "../data/quiz3data"
import { v4 as uuidv4 } from 'uuid'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import { QuizAnswerContainer, QuizContainer, QuizContent, QuizCounter, QuizExplanation, QuizTextCenter, QuizTitle, QuizzesMain, QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'

const Quiz3Modal = () => {
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
        setShowInfo(false)
        if (currentQuestion < quiz3data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
        <div className='fatline'></div>
        <QuizzesPageMain>
            <SidebarGlobal title='Modals' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
            {showScore ? (
            <div>      
                <ShowSideBar/>
                <div className="score-section">Your score: {score}/{quiz3data.length}</div>
                <div className='showscore-btns'>
                    <a href="/quiz1" className='return'>Try Again</a>
                    <a href="/quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <ShowSideBar/>
                <h2>Modals III</h2>
                <QuizContainer>
                    <div className="question">
                    Question {currentQuestion + 1} / {quiz3data.length}
                    </div> 
                    <QuizTitle> 
                        <QuizCounter>
                            {currentQuestion + 1} <small>/ {quiz3data.length}</small>  
                        </QuizCounter>
                        <QuizContent>
                            <QuizTextCenter>
                                {quiz3data[currentQuestion].question}
                            </QuizTextCenter>
                        </QuizContent>
                    </QuizTitle>       
                    <QuizAnswerContainer>
                        {quiz3data[currentQuestion].answersList.map((a) => (
                            <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                        ))}
                    </QuizAnswerContainer>
                    {showExplanation && 
                        <QuizExplanation>
                            <>
                                <div className='title'>Explanation</div>
                                <div className="line"></div>
                                <div className='content'>{quiz3data[currentQuestion].help}</div>
                                <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                            </>
                        </QuizExplanation>         
                    }  
                </QuizContainer>             3                 
            </>        
            )           
            }
            </QuizzesMain>
        </QuizzesPageMain>
        </>
    )
}

export default Quiz3Modal


