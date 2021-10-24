import React from 'react'
import Sidebar from '../../articles/Sidebar'
import Quiz_1Articles from '../quizzes_back/Quiz_1Articles'
// import "../../prepositions/style.css"

const Quiz1Articles = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_1Articles/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Articles