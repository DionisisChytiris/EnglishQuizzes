import React from 'react'
import Sidebar from '../../tenses3/Sidebar'
import Quiz1Tenses from '../../tenses3/quizzes_back/Quiz_1Tenses'
// import "../../prepositions/style.css"

const Quiz1Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz1Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Tenses3