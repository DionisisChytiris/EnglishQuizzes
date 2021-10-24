import React from 'react'
import Sidebar from '../prepositions/Sidebar'
import Quiz_4 from './quizzes/Quiz_4'


const Quiz4 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_4/>
                </div>
               
            </div>
        </>
    )
}

export default Quiz4
