import React, {useState} from 'react'
import quiz6data from "../data/quiz6data"
import { v4 as uuidv4 } from 'uuid'
import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation } from '../../../General Styles/QuizzesPage.styled'


const Quiz6 = () => {
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
        if (currentQuestion < quiz6data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
        <div className='navLine'></div>
        <QuizzesPageMain>
            <Sidebar />
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <div className="score-section">Your score: {score}/{quiz6data.length}</div>
                    <div className='showscore-btns'>
                        <a href="/verbs_to_ing_1" className='return'>Try Again</a>
                        <a href="/verbs_to_ing_2" className='return'>Next Quiz</a>
                    </div>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Prepositions of Place (on, in, at)</h2>
                    <QuizContainer>
                        <QuizTitle>
                            <QuizCounter>
                                <div>

                                {currentQuestion + 1}
                                </div>
                                <small>/ {quiz6data.length}</small>
                            </QuizCounter>
                            <QuizContent>
                                <QuizTextCenter>
                                    {quiz6data[currentQuestion].question}       
                                </QuizTextCenter>       
                            </QuizContent>
                        </QuizTitle>
                        <QuizAnswerContainer>
                            {quiz6data[currentQuestion].answersList.map((a) => (
                                <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                            ))}
                            </QuizAnswerContainer>
                            {showExplanation &&
                                <QuizExplanation>
                                    <>
                                        <div className='title'>Explanation</div>
                                        <div className="line"></div>
                                        <div className='content'>{quiz6data[currentQuestion].help}</div>
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

export default Quiz6