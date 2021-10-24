import React from 'react'
import Sidebar from '../../tenses2/Sidebar'
import Quiz_3Tenses from '../../tenses2/quizzes_back/Quiz_3Tenses'
// import "../../prepositions/style.css"

const Quiz3Tenses2 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_3Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Tenses2