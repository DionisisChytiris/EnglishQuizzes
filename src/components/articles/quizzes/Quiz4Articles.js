import React from 'react'
import Sidebar from '../../articles/Sidebar'
import Quiz_4Articles from '../quizzes_back/Quiz_4Articles'
// import "../../prepositions/style.css"

const Quiz4Articles = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_4Articles/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Articles