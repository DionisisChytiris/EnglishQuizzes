import React from 'react'
import OpenClose1Test from '../OpenClose_back.js/OpenClose_1'
import Sidebar from '../Sidebar'


const OpenClose1 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='fce_mainPage'>
                    <OpenClose1Test/>
                </div>
            </div>
        </>
    )
}

export default OpenClose1