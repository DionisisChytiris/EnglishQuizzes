import React, {useState} from 'react'
import quiz4data from "../data/quiz4data"
import { v4 as uuidv4 } from 'uuid'
import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation } from '../../../General Styles/QuizzesPage.styled'


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
        setShowInfo(false)
        if (currentQuestion < quiz4data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <QuizzesPageMain>
            <Sidebar />
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <div className="score-section">Your score: {score}/{quiz4data.length}</div>
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
    )
}

export default Quiz4

// import React, { useState } from 'react'
// import quiz4data from "../data/quiz4data"
// import { GrClose, GrCircleQuestion } from "react-icons/gr";
// import { v4 as uuidv4 } from 'uuid'
// import { mixedTypeAnnotation } from '@babel/types';

// const Quiz_4 = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0)
//     const [score, setScore] = useState(0)
//     const [clicked, setClicked] = useState(false)
//     const [showScore, setShowScore] = useState(false)
//     const [showInfo, setShowInfo] = useState(false)
//     const [showExplanation, setShowExplanation] = useState(false)
//     const [wrongAnswer, setWrongAnswer] = useState('')

//     const handleCorrectAnswer = (isCorrect) => {
//         if (isCorrect) {
//             setScore(score + 1)           
//         } else {
//             setWrongAnswer('answer-quiz4 wrong')
//         }
//         setClicked(true)
//         setShowExplanation(true)
//     }

//     const handleNextQuestion = () => {
//         setClicked(false)
//         setShowExplanation(false)
//         setWrongAnswer('')
//         if (currentQuestion < quiz4data.length - 1) {
//             setCurrentQuestion(currentQuestion + 1)
//         } else {
//             setShowScore(true)
//         }
//     }

//     return (
//         <div className='trivia'>
//             {showScore ? (
//             <div>
//                 <div className="score-section">Your score: {score}/{quiz4data.length}</div>
//                 <div className='showscore-btns'>
//                     <a href="/quiz4" className='return'>Try Again</a>
//                     <a href="/" className='return'>Home</a>
//                 </div>
//             </div>
//             ) :
//                 (
//             <>
//                 <h6>Prepositions of time II</h6>    
//                 <div className="quiz4-count">
//                     <br/>
//                     Score {score} / {quiz4data.length}
//                 </div>
                
//                 <div className="question-quiz1">
//                 {currentQuestion + 1}. {quiz4data[currentQuestion].question}  
//                 </div>
//                 <div className="answers-quiz4">
//                     {quiz4data[currentQuestion].answersList.map((a) => (
//                         <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
//                     ))}
//                 </div>
//                 <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
//                 {
//                     showExplanation ? (
//                         <div className="help-box">
//                         {/* <button className='help' onClick={() => setShowInfo(!showInfo)}> { showInfo ? <GrClose/> : <GrCircleQuestion/> }</button> */}
//                         <button className='help' onClick={() => setShowInfo(!showInfo)}> { showInfo ? 'Hide' : 'Show Explanation' }</button>
//                         <div className="help-line"></div>
//                                 {
//                                     showInfo &&
//                                     <p>{quiz4data[currentQuestion].help}</p>
//                                 }                         
//                         </div>
//                     ) : ''
//                 }                  
//             </>
//             )           
//             }
//         </div>
//     )
// }

// export default Quiz_4

