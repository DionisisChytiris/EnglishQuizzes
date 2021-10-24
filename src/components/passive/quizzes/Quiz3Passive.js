import React from 'react'
import Quiz_3Passive from '../quizzes_back/Quiz_3Passive'
import Sidebar from '../../passive/Sidebar'


const Quiz3Passive = () => {
    return (
        <>
            <div className="quizzes_page_quizzes">
                <Sidebar/>
                <div className='quizzes_pre_quiz'>
                    <Quiz_3Passive/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Passive