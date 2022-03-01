import React from 'react'
import MultipleChoice1Test from '../MultipleChoice_back/MultipleChoice_1'

import Sidebar from '../Sidebar'

const MultipleChoice1 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes1">
                <Sidebar />
                <div className='fce_mainPage'>
                    <MultipleChoice1Test/>
                </div>
            </div>
        </>
    )
}

export default MultipleChoice1