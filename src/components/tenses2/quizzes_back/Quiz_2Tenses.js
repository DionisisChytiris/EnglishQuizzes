import React, {useState} from 'react'
import quiz2data from "../../tenses2/data/quiz2data"
import { v4 as uuidv4 } from 'uuid'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import { QuizAnswerContainer, QuizContainer, QuizContent, QuizCounter, QuizExplanation, QuizTextCenter, QuizTitle, QuizzesMain, QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'

const Quiz2Tenses2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState('')

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        if (!isCorrect) {
        setWrongAnswer('answer-quiz4 wrong')     
        }   
          
        setClicked(true)
        setShowExplanation(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        setWrongAnswer('')
        if (currentQuestion < quiz2data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
        <div className='fatline'></div>
        <QuizzesPageMain>
            <SidebarGlobal title='Tenses 2' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
            {showScore ? (
            <div>
                <ShowSideBar/>
                <div className="score-section">Your score: {score}/{quiz2data.length}</div>
                <div className='showscore-btns'>
                    <a href="/tenses1quiz1" className='return'>Try Again</a>
                    <a href="/tenses1quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <ShowSideBar/>
                <h2>Past Perfect / Past Perfect Continuous</h2>
                <QuizContainer>
                        <div className="question">
                        Question {currentQuestion + 1} / {quiz2data.length}
                        </div> 
                        <QuizTitle> 
                            <QuizCounter>
                                {currentQuestion + 1} <small>/ {quiz2data.length}</small>  
                            </QuizCounter>
                            <QuizContent>
                                <QuizTextCenter>
                                    {quiz2data[currentQuestion].question}
                                </QuizTextCenter>
                            </QuizContent>
                        </QuizTitle>       
                        <QuizAnswerContainer>
                            {quiz2data[currentQuestion].answersList.map((a) => (
                                <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                            ))}
                        </QuizAnswerContainer>
                        {showExplanation && 
                            <QuizExplanation>
                                <>
                                    <div className='title'>Explanation</div>
                                    <div className="line"></div>
                                    <div className='content'>{quiz2data[currentQuestion].help}</div>
                                    <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                                </>
                            </QuizExplanation>         
                        }  
                    </QuizContainer>                   
            </>        
            )           
            }
            </QuizzesMain>
        </QuizzesPageMain>
        </>
    )
}

export default Quiz2Tenses2