import React from 'react'
import Sidebar from '../../tenses2/Sidebar'
import Quiz_2Tenses from '../../tenses2/quizzes_back/Quiz_2Tenses'
// import "../../prepositions/style.css"

const Quiz2Tenses2 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_2Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Tenses2