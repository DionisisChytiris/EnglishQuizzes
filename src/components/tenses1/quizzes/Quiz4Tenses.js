import React from 'react'
import Sidebar from '../../tenses1/Sidebar'
import Quiz_4Tenses from '../../tenses1/quizzes_back/Quiz_4Tenses'
// import "../../prepositions/style.css"

const Quiz4Tenses = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_4Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Tenses