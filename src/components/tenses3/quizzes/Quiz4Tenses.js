import React from 'react'
import Sidebar from '../../tenses3/Sidebar'
import Quiz4Tenses from '../quizzes_back/Quiz_4Tenses'


const Quiz4Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz4Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Tenses3