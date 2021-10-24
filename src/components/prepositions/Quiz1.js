import React from 'react'
import Sidebar from '../prepositions/Sidebar'
import Quiz_1 from './quizzes/Quiz_1'


const Quiz1 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_1/>
                </div>
            </div>
        </>
    )
}

export default Quiz1
