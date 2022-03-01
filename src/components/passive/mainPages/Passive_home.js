import React from 'react'
import Sidebar from '../Sidebar'
import Instructions from './Instructions'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'

const Passive = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <Sidebar />
                <Instructions />
            </QuizzesPageMain>
        </>
    )
}

export default Passive