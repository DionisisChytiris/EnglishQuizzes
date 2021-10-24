import React from 'react'
import Quiz_1Passive from '../quizzes_back/Quiz_1Passive'
import Sidebar from '../../passive/Sidebar'


const Quiz1Passive = () => {
    return (
        <>
            <div className="quizzes_page_quizzes">
                <Sidebar/>
                <div className='quizzes_pre_quiz'>
                    <Quiz_1Passive/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Passive