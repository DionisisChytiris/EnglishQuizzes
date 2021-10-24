import React, {useState} from 'react'
import quiz4data from "../../tenses3/data/quiz4data"
import { v4 as uuidv4 } from 'uuid'

const Quiz_1Tenses = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState('')
    const [numberCircle, setNumberCircle] = useState(true)

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
            setNumberCircle(false)
        }
        if (!isCorrect) {
        setWrongAnswer('answer-quiz4 wrong')     
        }   
          
        setClicked(true)
        setShowExplanation(true)
    }

    const handleNextQuestion = () => {
        setClicked(false)
        setShowExplanation(false)
        setWrongAnswer('')
        if (currentQuestion < quiz4data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='trivia'>
            {showScore ? (
            <div>
                <div className="score-section">Your score: {score}/{quiz4data.length}</div>
                <div className='showscore-btns'>
                    <a href="/tenses1quiz1" className='return'>Try Again</a>
                    <a href="/tenses1quiz2" className='return'>Next Quiz</a>
                </div>
            </div>
            ) :
            (
            <>
                <div className="number_circle_line">
                    <div className="number_circle_line_horizontal"></div>
                    {/* <div className='number_circle_green'>1</div>       */}
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>{quiz4data[0].number}</div>      
                    <div className='number_circle_red'>{quiz4data[1].number}</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>{quiz4data[2].number}</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>{quiz4data[3].number}</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>5</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>6</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>7</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>8</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>9</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>10</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>11</div>      
                    <div className={numberCircle ? 'number_circle' :  'number_circle_green'}>12</div>                            
                </div>
                        
                {/* <div className="number_circle_line">
                    <div className="number_circle_line_horizontal"></div>
                            <div className={numberCircle ? 'number_circle' : 'number_circle_green'}>{quiz4data[...number]}</div>
                </div> */}
                        
                <h6>Tenses 3</h6>
                <h5>open cloze</h5>
                <br/>
                <div className="quiz1-count">
                Question {currentQuestion + 1} / {quiz4data.length}
                </div>        
                <div className="question-quiz1">
                     {currentQuestion + 1}. {quiz4data[currentQuestion].question}  
                </div>
                <div className="answers-quiz4">
                    {quiz4data[currentQuestion].answersList.map((a) => (
                        <div disabled={clicked} className={`answer-quiz4 ${clicked && a.isCorrect ? "correct" : wrongAnswer}`} key={uuidv4()}onClick={()=>handleCorrectAnswer(a.isCorrect)}>{a.answer}</div>
                    ))}
                </div>
                <button className='next-btn' onClick={handleNextQuestion} disabled={!clicked}>Next</button>
                {
                    showExplanation ? (
                        <div className="help-box">
                        <button className='help' onClick={() => setShowInfo(!showInfo)}> { showInfo ? 'Hide' : 'Show Explanation' }</button>
                        <div className="help-line"></div>
                                {
                                    showInfo &&
                                        <>
                                             <p className='help-explanation'>{quiz4data[currentQuestion].help}</p>
                                            <p className='help-explanation'>{quiz4data[currentQuestion].help1}</p>
                                        </>
                                }                         
                        </div>
                    ) : ''
                }                  
            </>        
            )           
            }
        </div>
    )
}

export default Quiz_1Tenses