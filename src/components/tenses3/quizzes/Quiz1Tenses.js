import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Quiz1Tenses from '../../tenses3/quizzes_back/Quiz_1Tenses'
// import "../../prepositions/style.css"

const Quiz1Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <SidebarGlobal title='Tenses 3' data1={pickquiz} data2={pickmore}/>
                <div className='quizzes_pre_quiz'>
                    <Quiz1Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz1Tenses3