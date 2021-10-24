import React from 'react'
import Sidebar from '../../verbs_to_ing/Sidebar'
import Quiz_2 from '../quizzes_back/Quiz_2'


const Quiz2Verb_ing = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_2/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Verb_ing
