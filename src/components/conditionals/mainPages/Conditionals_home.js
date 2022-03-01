import React from 'react'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'
import Instructions from './Instructions'
import Sidebar from '../Sidebar'

const Conditionals = () => {
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

export default Conditionals
