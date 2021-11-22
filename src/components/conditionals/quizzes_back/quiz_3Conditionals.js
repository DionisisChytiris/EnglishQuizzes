import React, {useState} from 'react'
import quiz3data from "../data/quiz3data"
import { v4 as uuidv4 } from 'uuid'
import { QuizAnswerContainer, AnswerContainer, Question, QuestionCounter, QuizzesMain, QuizzesPageMain, Explanation, ExplanationTitle, ExplanationContent, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizExplanation } from '../../../General Styles/QuizzesPage.styled'
import Sidebar from '../Sidebar'

const Quiz_3Conditionals = () => {
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
        <QuizzesPageMain>
            <Sidebar/>
            <QuizzesMain>
                {showScore ? (
                <div>      
                    <div className="score-section">Your score: {score}/{quiz3data.length}</div>
                    <div className='showscore-btns'>
                        <a href="/quiz1" className='return'>Try Again</a>
                        <a href="/quiz2" className='return'>Next Quiz</a>
                    </div>
                </div>
                ) :
                (
                <>
                    <h2>Conditionals 3</h2>
                    <QuizContainer>            
                        <QuizTitle>
                            <QuizCounter>
                                {currentQuestion + 1}
                                <small>/ {quiz3data.length}</small>
                            </QuizCounter>
                            <QuizContent>
                                    {quiz3data[currentQuestion].question}       
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
                    </QuizContainer>
                    {/* <QuestionCounter>
                    Question {currentQuestion + 1} / {quiz3data.length}
                    </QuestionCounter>        
                    <Question>
                        {currentQuestion + 1}. {quiz3data[currentQuestion].question}  
                    </Question>
                    <AnswerContainer>
                        {quiz3data[currentQuestion].answersList.map((a) => (
                            <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                        ))}
                    </AnswerContainer>
                    {showExplanation &&                       
                        <Explanation>                           
                            <>
                                <ExplanationTitle>Explanation</ExplanationTitle>
                                <div className="line"></div>    
                                <ExplanationContent>{quiz3data[currentQuestion].help}</ExplanationContent>
                                <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                            </>                       
                        </Explanation>                
                    }              */}
                </>        
                )           
                }
            </QuizzesMain>
        </QuizzesPageMain>
    )
}

export default Quiz_3Conditionals


