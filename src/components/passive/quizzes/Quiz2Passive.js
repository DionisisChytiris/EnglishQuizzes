import React from 'react'
import Quiz_2Passive from '../quizzes_back/Quiz_2Passive'
import Sidebar from '../../passive/Sidebar'


const Quiz2Passive = () => {
    return (
        <>
            <div className="quizzes_page_quizzes">
                <Sidebar/>
                <div className='quizzes_pre_quiz'>
                    <Quiz_2Passive/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Passive