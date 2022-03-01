import React from 'react'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import Sidebar from '../Sidebar'
import Return from './Return'

const Articles = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <Sidebar />
                <Return />
            </QuizzesPageMain>
        </>
    )
}

export default Articles
