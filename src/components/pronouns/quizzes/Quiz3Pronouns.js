import React from 'react'
import Sidebar from '../../pronouns/Sidebar'
import Quiz_3Pronouns from '../quizzes_back/Quiz_3Pronouns'


// import "../../prepositions/style.css"

const Quiz3Pronouns = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_3Pronouns/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Pronouns