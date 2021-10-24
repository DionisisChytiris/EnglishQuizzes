import React from 'react'
import Sidebar from '../../verbs_to_ing/Sidebar'
import Quiz_3 from '../quizzes_back/Quiz_3'


const Quiz3Verb_ing = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_3/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Verb_ing
