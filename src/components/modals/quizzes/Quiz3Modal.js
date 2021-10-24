import React from 'react'
import Quiz_3Modal from '../quizzes_back/Quiz_3Modal'
import Sidebar from '../../modals/Sidebar'


const Quiz3Modal = () => {
    return (
        <>
            <div className="quizzes_page_quizzes">
                <Sidebar/>
                <div className='quizzes_pre_quiz'>
                    <Quiz_3Modal/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Modal