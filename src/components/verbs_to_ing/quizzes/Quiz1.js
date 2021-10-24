import React from 'react'
import Sidebar from '../../verbs_to_ing/Sidebar'
import Quiz_1 from '../quizzes_back/Quiz_1'


const Quiz1Verb_ing = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_1/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Verb_ing
