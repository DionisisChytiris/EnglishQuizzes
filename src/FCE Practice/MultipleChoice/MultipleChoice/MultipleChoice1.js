import React from 'react'
import MultipleChoice_1 from '../MultipleChoice_back/MultipleChoice_1'

import Sidebar from '../Sidebar'

const MultipleChoice1 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes1">
                <Sidebar />
                <div className='fce_mainPage'>
                    <MultipleChoice_1/>
                </div>
            </div>
        </>
    )
}

export default MultipleChoice1