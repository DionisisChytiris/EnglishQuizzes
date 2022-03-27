import React, {useState} from 'react'
import quiz4data from "../data/quiz4data"
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import { v4 as uuidv4 } from 'uuid'
// import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation } from '../../../General Styles/QuizzesPage.styled'
import QuizResultsSection from '../../../General Pages/Quiz Results/ResultsTest'


const Quiz4 = () => {
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
        if (currentQuestion < quiz4data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
        <div className='fatline'></div>
        <QuizzesPageMain>
            <SidebarGlobal title='Prepositions' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <QuizResultsSection data={quiz4data} score={score} source1={'/quiz4'} source2={'/quiz5'}/>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Prepositions of Time (on, in, at)</h2>
                    <QuizContainer>
                        <QuizTitle>
                            <QuizCounter>
                                {currentQuestion + 1}
                                <small>/ {quiz4data.length}</small>
                            </QuizCounter>
                            <QuizContent>
                                <QuizTextCenter>
                                    {quiz4data[currentQuestion].question}       
                                </QuizTextCenter>       
                            </QuizContent>
                        </QuizTitle>
                        <QuizAnswerContainer>
                            {quiz4data[currentQuestion].answersList.map((a) => (
                                <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                            ))}
                            </QuizAnswerContainer>
                            {showExplanation &&
                                <QuizExplanation>
                                    <>
                                        <div className='title'>Explanation</div>
                                        <div className="line"></div>
                                        <div className='content'>{quiz4data[currentQuestion].help}</div>
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

export default Quiz4

