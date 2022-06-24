import React, {useState} from 'react'
import quiz2data from '../data/quiz2data'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { v4 as uuidv4 } from 'uuid'
import { QuizzesMain, QuizzesPageMain,  QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation, } from '../../../General Styles/QuizzesPage.styled'
import QuizResultsSection from '../../../General Pages/Quiz Results/ResultsTest'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'

const Quiz2Conditionals = () => {
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
        if (currentQuestion < quiz2data.length - 1) {
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
                    <QuizResultsSection data={quiz2data} score={score} source1={'conditionals_2'} source2={'conditionals_3'}/>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <h2>Conditionals 2</h2>
                    <QuizContainer>
                    <div className='question'>Question  {currentQuestion + 1} / {quiz2data.length}</div>
                    <QuizTitle>
                        <QuizCounter>
                            {currentQuestion + 1}
                            <small>/ {quiz2data.length}</small>
                        </QuizCounter>
                        <QuizContent>
                            <QuizTextCenter>
                                {quiz2data[currentQuestion].question}       
                            </QuizTextCenter>      
                        </QuizContent>
                    </QuizTitle>
                    <QuizAnswerContainer>
                        {quiz2data[currentQuestion].answersList.map((a) => (
                            <div disabled={clicked} className={`answer ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                        ))}
                    </QuizAnswerContainer>
                    {showExplanation &&
                        <QuizExplanation>
                            <>
                                <div className='title'>Explanation</div>
                                <div className="line"></div>
                                <div className='content'>{quiz2data[currentQuestion].help}</div>
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

export default Quiz2Conditionals


