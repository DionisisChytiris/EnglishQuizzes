import React from 'react'
import Sidebar from '../../articles/Sidebar'
import Quiz_2Articles from '../quizzes_back/Quiz_2Articles'
// import "../../prepositions/style.css"

const Quiz2Articles = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_2Articles/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Articles