import React, {useState} from 'react'
import quiz2data from '../data/quiz2data'
import { v4 as uuidv4 } from 'uuid'
import { AnswerContainer, Explanation, Question, QuestionCounter, QuizzesMain, QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import Sidebar from '../Sidebar'

const Quiz_2Conditionals = () => {
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
        if (currentQuestion < quiz2data.length - 1) {
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
                    <div className="score-section">Your score: {score}/{quiz2data.length}</div>
                    <div className='showscore-btns'>
                        <a href="/quiz1" className='return'>Try Again</a>
                        <a href="/quiz2" className='return'>Next Quiz</a>
                    </div>
                </div>
                ) :
                (
                <>
                    <h1>Conditionals 2</h1>
                    <QuestionCounter>
                        Question {currentQuestion + 1} / {quiz2data.length}
                    </QuestionCounter>        
                    <Question>
                        {currentQuestion + 1}. {quiz2data[currentQuestion].question}  
                    </Question>
                    <AnswerContainer>
                        {quiz2data[currentQuestion].answersList.map((a) => (
                            <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                        ))}
                    </AnswerContainer>
                    {showExplanation &&                       
                        <Explanation>                              
                            <>
                                <div className='help'>Explanation</div>
                                <div className="help-line"></div>    
                                <p className='help-explanation'>{quiz2data[currentQuestion].help}</p>
                                <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                            </>                       
                        </Explanation>                
                    }             
                </>        
                )           
                }
            </QuizzesMain>
        </QuizzesPageMain>
    )
}

export default Quiz_2Conditionals


