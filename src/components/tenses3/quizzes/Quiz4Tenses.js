import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Quiz4Tenses from '../quizzes_back/Quiz_4Tenses'


const Quiz4Tenses3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <SidebarGlobal title='Tenses 3' data1={pickquiz} data2={pickmore}/>
                <div className='quizzes_pre_quiz'>
                    <Quiz4Tenses/>
                </div>
            </div>
        </>
    )
}

export default Quiz4Tenses3