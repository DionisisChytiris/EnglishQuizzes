import React from 'react'
import OpenClose3Test from '../OpenClose_back.js/OpenClose_3'
import Sidebar from '../Sidebar'


const OpenClose3 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes1">
                <Sidebar />
                <div className='fce_mainPage'>
                    <OpenClose3Test/>
                </div>
            </div>
        </>
    )
}

export default OpenClose3