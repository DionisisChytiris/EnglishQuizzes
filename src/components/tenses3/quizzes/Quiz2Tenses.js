import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Quiz2Tenses from '../../tenses3/quizzes_back/Quiz_2Tenses'
// import "../../prepositions/style.css"

const Quiz2Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <SidebarGlobal title='Tenses 3' data1={pickquiz} data2={pickmore}/>
                <div className='quizzes_pre_quiz'>
                    <Quiz2Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz2Tenses3