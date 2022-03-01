import React from 'react'
import Sidebar from '../Sidebar'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import Instructions from './Return'

const Prepositions = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <Sidebar />
                <Instructions/>
            </QuizzesPageMain>
        </>
    )
}

export default Prepositions
