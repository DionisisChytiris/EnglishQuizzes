import React from 'react'
import Sidebar from '../../pronouns/Sidebar'
import Quiz_2Pronouns from '../quizzes_back/Quiz_2Pronouns'


// import "../../prepositions/style.css"

const Quiz2Pronouns = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_2Pronouns/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Pronouns