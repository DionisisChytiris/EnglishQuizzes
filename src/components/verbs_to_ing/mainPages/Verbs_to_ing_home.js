import React from 'react'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import Sidebar from '../Sidebar'
import Instructions from './Instructions'

const VerbsToIng = () => {
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

export default VerbsToIng