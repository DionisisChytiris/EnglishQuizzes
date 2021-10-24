import React from 'react'
import Sidebar from '../../tenses3/Sidebar'
import Quiz_4Tenses from '../../tenses3/quizzes_back/Quiz_4Tenses'


const Quiz4Tenses3 = () => {
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

export default Quiz4Tenses3