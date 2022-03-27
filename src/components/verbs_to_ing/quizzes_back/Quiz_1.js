import React, {useState} from 'react'
import quiz1data from "../data/quiz1data"
import { v4 as uuidv4 } from 'uuid'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizAnswerContainer, QuizExplanation, QuizTextCenter } from '../../../General Styles/QuizzesPage.styled'


const Quiz1VerbIng = () => {
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
        } else {
            setWrongAnswer('answer-quiz4 wrong')
        }
        setClicked(true)
        setShowExplanation(true)
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
            <SidebarGlobal title='Gerund/Infinitive' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <div className="score-section">Your score: {score}/{quiz1data.length}</div>
                    <div className='showscore-btns'>
                        <a href="/verbs_to_ing_1" className='return'>Try Again</a>
                        <a href="/verbs_to_ing_2" className='return'>Next Quiz</a>
                    </div>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Gerund / Infinitive</h2>
                    <QuizContainer>
                        <QuizTitle>
                            <QuizCounter>
                                {currentQuestion + 1}
                                <small>/ {quiz1data.length}</small>
                            </QuizCounter>
                            <QuizContent>
                                <QuizTextCenter>
                                    {quiz1data[currentQuestion].question}       
                                </QuizTextCenter>
                            </QuizContent>
                        </QuizTitle>
                        <QuizAnswerContainer>
                            {quiz1data[currentQuestion].answersList.map((a) => (
                                <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                            ))}
                            </QuizAnswerContainer>
                            {showExplanation &&
                                <QuizExplanation>
                                    <>
                                        <div className='title'>Explanation</div>
                                        <div className="line"></div>
                                        <div className='content'>{quiz1data[currentQuestion].help}</div>
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

export default Quiz1VerbIng