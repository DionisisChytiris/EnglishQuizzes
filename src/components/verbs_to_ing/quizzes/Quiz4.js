import React from 'react'
import Sidebar from '../../verbs_to_ing/Sidebar'
import Quiz_4 from '../quizzes_back/Quiz_4'


const Quiz4Verb_ing = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Quiz_4/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Verb_ing
