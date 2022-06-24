import React, {useState} from 'react'
import quiz3data from "../data/quiz3data"
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { v4 as uuidv4 } from 'uuid'
// import { QuizAnswerContainer, AnswerContainer, Question, QuestionCounter, QuizzesMain, QuizzesPageMain, Explanation, ExplanationTitle, ExplanationContent, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizExplanation } from '../../../General Styles/QuizzesPage.styled'
import { QuizzesMain, QuizzesPageMain,  QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation, } from '../../../General Styles/QuizzesPage.styled'
import QuizResultsSection from '../../../General Pages/Quiz Results/ResultsTest'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'

const Quiz3Conditionals = () => {
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
        setShowInfo(!showInfo)
        if (currentQuestion < quiz3data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <>
        <div className='navLine'></div>
        <QuizzesPageMain>
            <SidebarGlobal title='Conditionals' data1={pickquiz} data2={pickmore}/>
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>    
                    <QuizResultsSection data={quiz3data} score={score} source1={'conditionals_3'} source2={'conditionals_1'}/>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Conditionals 3</h2>
                    <QuizContainer>
                    <div className='question'>Question  {currentQuestion + 1} / {quiz3data.length}</div>
                    <QuizTitle>
                        <QuizCounter>
                            {currentQuestion + 1}
                            <small>/ {quiz3data.length}</small>
                        </QuizCounter>
                        <QuizContent>
                            <QuizTextCenter>
                                {quiz3data[currentQuestion].question}       
                            </QuizTextCenter>      
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
                </>        
                )           
                }
            </QuizzesMain>
        </QuizzesPageMain>
        </>
    )
}

export default Quiz3Conditionals


