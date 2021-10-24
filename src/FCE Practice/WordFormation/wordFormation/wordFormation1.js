import React from 'react'
import WordFormation_1 from '../wordFormation_back/wordFormation_1'
import Sidebar from '../Sidebar'

const WordFormation1 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes1">
                <Sidebar />
                <div className='fce_mainPage'>
                    <WordFormation_1/>
                </div>
            </div>
        </>
    )
}

export default WordFormation1