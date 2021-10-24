import React from 'react'
import Sidebar from '../prepositions/Sidebar'
import Quiz_3 from './quizzes/Quiz_3'


const Quiz3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_3/>
                </div>
            </div>
        </>
    )
}

export default Quiz3
