import React from 'react'
import Sidebar from '../../pronouns/Sidebar'
import Quiz_4Pronouns from '../quizzes_back/Quiz_4Pronouns'


// import "../../prepositions/style.css"

const Quiz4Pronouns = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_4Pronouns/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Pronouns