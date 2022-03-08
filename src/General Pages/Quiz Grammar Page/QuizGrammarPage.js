import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import ShowSideBar from '../../components/prepositions/mainPages/ShowSidebarQuiz'
// import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation } from '../../General Styles/QuizzesPage.styled'

const QuizGrammarPage = (props) => {
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
        if (currentQuestion < props.data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
            <ShowSideBar/>
            {/* Delete the below line */}
            <div>{showScore}</div>
            <h2>{props.title}</h2>
            <QuizContainer>
                <QuizTitle>
                    <QuizCounter>
                        {currentQuestion + 1}
                        <small>/ {props.data.length}</small>
                    </QuizCounter>
                    <QuizContent>
                        <QuizTextCenter>
                            {props.data[currentQuestion].question}       
                        </QuizTextCenter>      
                    </QuizContent>
                </QuizTitle>
                <QuizAnswerContainer>
                    {props.data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()} onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                    ))}
                </QuizAnswerContainer>
                {showExplanation &&
                    <QuizExplanation>
                        <>
                            <div className='title'>Explanation</div>
                            <div className="line"></div>
                            <div className='content'>{props.data[currentQuestion].help}</div>
                            <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                        </>
                    </QuizExplanation>
                }
            </QuizContainer>                          
        </>
    )
}

export default QuizGrammarPage


