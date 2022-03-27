import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Return from './Return'

const Articles = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
            <SidebarGlobal title='Articles' data1={pickquiz} data2={pickmore}/>
                <Return />
            </QuizzesPageMain>
        </>
    )
}

export default Articles
