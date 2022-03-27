import React from 'react'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Instructions from './Instructions'

const Modals = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <SidebarGlobal title='Modals' data1={pickquiz} data2={pickmore}/>
                <Instructions />
            </QuizzesPageMain>
        </>
    )
}

export default Modals