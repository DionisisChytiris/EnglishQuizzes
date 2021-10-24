import React from 'react'
import Sidebar from '../../tenses1/Sidebar'
import Quiz_1Tenses from '../../tenses1/quizzes_back/Quiz_1Tenses'
// import "../../prepositions/style.css"

const Quiz1Tenses = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_1Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Tenses