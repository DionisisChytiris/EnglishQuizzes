import React from 'react'
import Instructions from './Instructions'
import Sidebar from '../Sidebar'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'


const Pronouns = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <Sidebar/>
                <Instructions/>           
            </QuizzesPageMain>
        </>
    )
}

export default Pronouns
