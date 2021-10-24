import React from 'react'
import Sidebar from '../../tenses3/Sidebar'
import Quiz_3Tenses from '../../tenses3/quizzes_back/Quiz_3Tenses'

const Quiz3Tenses3 = () => {
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

export default Quiz3Tenses3