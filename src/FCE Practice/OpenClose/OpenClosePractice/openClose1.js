import React from 'react'
import OpenClose_1 from '../OpenClose_back.js/OpenClose_1'
import Sidebar from '../Sidebar'


const OpenClose1 = () => {
    return (
        <>
             <div className="quizzes_page_quizzes">
                <Sidebar />
                <div className='fce_mainPage'>
                    <OpenClose_1/>
                </div>
            </div>
        </>
    )
}

export default OpenClose1