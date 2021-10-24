import React from 'react'
import Sidebar from '../../tenses1/Sidebar'
import Quiz_3Tenses from '../../tenses1/quizzes_back/Quiz_3Tenses'
// import "../../prepositions/style.css"

const Quiz3Tenses = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_3Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Tenses