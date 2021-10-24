import React from 'react'
import Quiz_1Modal from '../quizzes_back/Quiz_1Modal'
import Sidebar from '../../modals/Sidebar'


const Quiz1Modal = () => {
    return (
        <>
            <div className="quizzes_page_quizzes">
                <Sidebar/>
                <div className='quizzes_pre_quiz'>
                    <Quiz_1Modal/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Modal