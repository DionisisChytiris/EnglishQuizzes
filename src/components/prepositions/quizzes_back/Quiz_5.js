import React, {useState} from 'react'
import quiz5data from "../data/quiz5data"
import Sidebar from '../Sidebar'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import { QuizzesMain, QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'
import QuizResultsSection from '../../../General Pages/Quiz Results/ResultsTest'
import QuizGrammarPage from '../../../General Pages/Quiz Grammar Page/QuizGrammarPage'

const Quiz5 = (props) => {
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    // Just delete wrong//////////////////
    if(quiz5data>quiz5data.length){
        setScore(true)
        setShowScore(true)
    }
    ///////////////////////////////

    return (
        <>
        <div className='fatline'></div>
        <QuizzesPageMain>
            <Sidebar />
            <QuizzesMain>
                {showScore ? (
                <div>
                    <ShowSideBar/>
                    <QuizResultsSection data={quiz5data} score={score} source1={'/quiz5'} source2={'/quiz6'}/>
                </div>
                ) :
                (
                <>
                    <QuizGrammarPage title={'Prepos: Testing QuizGrammarPage'} data={quiz5data}/>
                </>        
                )           
                }
            </QuizzesMain>
        </QuizzesPageMain>
        </>
    )
}

export default Quiz5