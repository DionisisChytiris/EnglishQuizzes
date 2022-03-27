import React from 'react'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Instructions from './Return'

const Tenses1 = () => {
    return (
        <>
            <div className="fatline"></div>
            <QuizzesPageMain>
                <SidebarGlobal title='Tenses 1' data1={pickquiz} data2={pickmore}/>
                <Instructions />
            </QuizzesPageMain>
        </>
    )
}

export default Tenses1
