import React, {useState} from 'react'
import quiz1data from "../data/quiz1data"
import { v4 as uuidv4 } from 'uuid'
import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation, QuizResults } from '../../../General Styles/QuizzesPage.styled'


const Quiz1 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState('')
    const [results, setResults] = useState(false)

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
        <div className='fatline'></div>
        <QuizzesPageMain>
            <Sidebar />
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <QuizResults>
                        <h1>Congratulations!!!</h1>
                        <div className="score-section">Your score is {score} out of {quiz1data.length}!!!</div>
                        <div className='buttons-section'>
                            <a href="/verbs_to_ing_1" className='button'>Try Again</a>
                            <div className='button' onClick={()=>{setResults(!results)}}>Results</div>
                            <a href="/verbs_to_ing_2" className='button'>Next Quiz</a>
                        </div>
                        {
                            results &&
                                <div className='results'>
                                    {quiz1data[currentQuestion].question}  
                                </div>
                        }
                    </QuizResults>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Prepositions of Place (on, in, at)</h2>
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
                                <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()} onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
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

export default Quiz1


