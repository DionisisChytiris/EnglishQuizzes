import React from 'react'
import Sidebar from '../prepositions/Sidebar'
import Test_1Prepositions from './quizzes/Test_1'

const Test1Prepositions = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='quizzes_pre_quiz'>
                    <Test_1Prepositions/>
                </div>
            </div>
        </>
    )
}

export default Test1Prepositions