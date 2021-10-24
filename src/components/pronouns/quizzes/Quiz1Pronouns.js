import React from 'react'
import Sidebar from '../../pronouns/Sidebar'
import Quiz_1Pronouns from '../quizzes_back/Quiz_1Pronouns'


// import "../../prepositions/style.css"

const Quiz1Pronouns = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_1Pronouns/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Pronouns
