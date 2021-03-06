import React, {useState, useEffect} from 'react'
import quiz1data from "../data/quiz1data"
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import { v4 as uuidv4 } from 'uuid'
// import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation, } from '../../../General Styles/QuizzesPage.styled'
import QuizResultsSection from '../../../General Pages/Quiz Results/ResultsTest'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { ProgressBar } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css"

const Quiz1 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState('')
    const [progress, setProgress] = useState(25);

    
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
        setShowInfo(!showInfo)
        setProgress(progress + 25)       
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
            {/* <Sidebar /> */}
            <SidebarGlobal title='Prepositions' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <QuizResultsSection data={quiz1data} score={score} source1={'/quiz1'} source2={'/quiz2'}/>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Prepositions of Time (on, in, at)</h2>
                    <div style={{width: '400px', marginBottom: '50px'}}>
                        <ProgressBar 
                            percent={progress} 
                            // unfilledBackground="white"
                            filledBackground="green"
                        />
                    </div>
                    <QuizContainer>
                        <div className='question'>Question  {currentQuestion + 1} / {quiz1data.length}</div>
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
                                <div 
                                    disabled={clicked} 
                                    className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} 
                                    key={uuidv4()}
                                    onClick={()=>{
                                        handleCorrectAnswer(a.isCorrect)
                                    }}
                                >{a.answer}</div>
                            ))}
                        </QuizAnswerContainer>
                        {showExplanation &&
                            <QuizExplanation>
                                <>
                                    <div className='title'>Explanation</div>
                                    <div className="line"></div>
                                    <div className='content'>{quiz1data[currentQuestion].help}</div>
                                    <button 
                                        className='next-btn' 
                                        onClick={handleNextQuestion}
                                        disabled={!clicked}
                                    >
                                        Next
                                    </button>
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
