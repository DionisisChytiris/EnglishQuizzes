import React from 'react'
import Instructions from './Instructions'
import Sidebar from '../Sidebar'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'


const Pronouns = () => {
    return (
        <>
            <QuizzesPageMain>
                <Sidebar/>
                <Instructions/>           
            </QuizzesPageMain>
        </>
    )
}

export default Pronouns
