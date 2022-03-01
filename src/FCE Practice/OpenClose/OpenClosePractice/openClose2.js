import React from 'react'
import OpenClose2Test from '../OpenClose_back.js/OpenClose_2'
import Sidebar from '../Sidebar'


const OpenClose2 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes1">
                <Sidebar />
                <div className='fce_mainPage'>
                    <OpenClose2Test/>
                </div>
            </div>
        </>
    )
}

export default OpenClose2