import React from 'react'
import Sidebar from '../../articles/Sidebar'
import Quiz_0Articles from '../quizzes_back/Quiz_0Articles'
// import "../../prepositions/style.css"

const Quiz0Articles = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_0Articles/>
                </div>
            </div>
        </>
    )
}

export default Quiz0Articles