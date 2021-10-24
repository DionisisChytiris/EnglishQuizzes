import React from 'react'
import Sidebar from '../../articles/Sidebar'
import Quiz_3Articles from '../quizzes_back/Quiz_3Articles'
// import "../../prepositions/style.css"

const Quiz3Articles = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_3Articles/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Articles