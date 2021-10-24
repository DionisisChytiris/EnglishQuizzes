import React from 'react'
import Sidebar from '../../tenses2/Sidebar'
import Quiz_4Tenses from '../../tenses2/quizzes_back/Quiz_4Tenses'
// import "../../prepositions/style.css"

const Quiz4Tenses2 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_4Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Tenses2