import React, {useState} from 'react'
import quiz5data from "../data/quiz5data"
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
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
            <SidebarGlobal title='Prepositions' data1={pickquiz} data2={pickmore}/>
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