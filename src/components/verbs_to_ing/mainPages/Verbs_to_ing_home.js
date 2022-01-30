import React from 'react'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import Sidebar from '../Sidebar'
import Instructions from './Instructions'

const Verbs_to_ing = () => {
    return (
        <>
            <QuizzesPageMain>
                <Sidebar />
                <Instructions />
            </QuizzesPageMain>
        </>
    )
}

export default Verbs_to_ing