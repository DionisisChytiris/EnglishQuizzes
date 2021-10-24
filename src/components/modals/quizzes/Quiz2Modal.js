import React from 'react'
import Quiz_2Modal from '../quizzes_back/Quiz_2Modal'
import Sidebar from '../../modals/Sidebar'


const Quiz2Modal = () => {
    return (
        <>
            <div className="quizzes_page_quizzes">
                <Sidebar/>
                <div className='quizzes_pre_quiz'>
                    <Quiz_2Modal/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Modal