import React from 'react'
import Sidebar from '../../tenses3/Sidebar'
import Quiz2Tenses from '../../tenses3/quizzes_back/Quiz_2Tenses'
// import "../../prepositions/style.css"

const Quiz2Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz2Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Tenses3