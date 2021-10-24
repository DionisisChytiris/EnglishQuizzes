import React from 'react'
import Sidebar from '../prepositions/Sidebar'
import Quiz_2 from './quizzes/Quiz_2'

const Quiz2 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_2/>
                </div>
            </div>
        </>
    )
}

export default Quiz2
