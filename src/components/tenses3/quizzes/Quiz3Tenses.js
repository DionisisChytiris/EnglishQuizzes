import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Quiz3Tenses from '../../tenses3/quizzes_back/Quiz_3Tenses'

const Quiz3Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <SidebarGlobal title='Tenses 3' data1={pickquiz} data2={pickmore}/>
                <div className='quizzes_pre_quiz'>
                    <Quiz3Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz3Tenses3