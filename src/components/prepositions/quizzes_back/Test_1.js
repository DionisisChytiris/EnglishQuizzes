import React, {useState} from 'react'
import test1data from "../../prepositions/data/test1data"
import Timer from '../../../General Pages/Timer'
import { v4 as uuidv4 } from 'uuid'
import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizzesMain, QuizzesPageMain, QuizContainer, QuizTitle, QuizCounter, QuizContent, QuizAnswerContainer, QuizExplanation } from '../../../General Styles/QuizzesPage.styled'

const Test_1Prepositions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState('')
    
    const handleCorrectAnswer = (isCorrect) => {
        // if (setCurrentQuestion === 10) {
        //     setShowScore(true)
        // } 
        if (isCorrect) {
            setScore(score + 1)
        }else {
            setWrongAnswer('answer-quiz4 wrong')
        }  
        setClicked(true)

        setTimeout(() => {
            if (isCorrect) {
                setCurrentQuestion(currentQuestion => currentQuestion + 1)
                setClicked(false)
                setWrongAnswer('')
            }
            if(!isCorrect) {
                setCurrentQuestion(currentQuestion => currentQuestion + 1)
                setClicked(false)
                setWrongAnswer('')
            }
        }, 1000)
    }

    return (
        <QuizzesPageMain>
            <Sidebar />
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <div className="score-section">Your score: {score}/{test1data.length}</div>
                    <div className='showscore-btns'>
                        <a href="/quiz1" className='return'>Try Again</a>
                        <a href="/quiz2" className='return'>Next Quiz</a>
                    </div>
                </div>
                ) :
                (
                <>
                    <ShowSideBar/>
                    <div className='timer'><Timer setShowScore={setShowScore} currentQuestion={currentQuestion} /></div>
                    <div className="quiz4-count">
                        Question {currentQuestion + 1} of {test1data.length}
                        <br/>
                        Score {score} / {test1data.length}
                    </div>
                    <div className="question-quiz1">
                        {test1data[currentQuestion].question}  
                    </div>
                    <div className="answers-quiz4">
                        {test1data[currentQuestion].answersList.map((a) => (
                            <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                        ))}
                    </div>
                </>        
                )           
                }
            </QuizzesMain>
        </QuizzesPageMain>
    )
}

export default Test_1Prepositions