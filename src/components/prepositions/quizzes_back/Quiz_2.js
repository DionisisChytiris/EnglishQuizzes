import React, {useState} from 'react'
import quiz2data from "../data/quiz2data"
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import { v4 as uuidv4 } from 'uuid'
// import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizTextCenter, QuizAnswerContainer, QuizExplanation, } from '../../../General Styles/QuizzesPage.styled'
import QuizResultsSection from '../../../General Pages/Quiz Results/ResultsTest'

const Quiz2 = () => {
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
        if (currentQuestion < quiz2data.length - 1) {
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
                    <QuizResultsSection data={quiz2data} score={score} source1={'/quiz2'} source2={'/quiz3'}/>
                    {/* <QuizResults>
                        {score > quiz2data.length/2 ? <h1>Congratulations!!!</h1> : <h1>Try Again!</h1>}
                        <div className="score-section">Your score is {score} out of {quiz2data.length}!!!</div>
                        <div className='buttons-section'>
                            <a href="/quiz2" className='button'>Try Again</a>
                            <div className='button' onClick={()=>{setResults(!results)}}>Results</div>
                            <a href="/quiz3" className='button'>Next Quiz</a>
                        </div>
                        {
                            results &&
                                <Results>
                                    <div className='title'>Check the results</div>
                                        {quiz2data.map((a)=> (
                                            <Slide right>
                                                <ResultBox>
                                                    <div className='result-title1'>Question {a.id}</div>
                                                    <div className='result-question'>{a.question}</div>
                                                    <div className='result-a'>{a.answersList.map((c)=><div className={`answer-box ${c.isCorrect ? 'answer-correct' : 'answer-wrong'} `}>{c.answer}
                                                    <div className='align'>{c.isCorrect ? <TiTick/> : <TiTimes/>}</div></div>)}</div>
                                                    <div className='result-title2'>Explanation</div>
                                                    <div className='result-explanation'>{a.help}</div>
                                                </ResultBox>
                                            </Slide>
                                        )
                                        )}  
                                </Results>
                        }
                    </QuizResults> */}
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

export default Quiz2
