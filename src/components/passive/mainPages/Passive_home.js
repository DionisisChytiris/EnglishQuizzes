import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Instructions from './Instructions'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'

const Passive = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <SidebarGlobal title='Passive' data1={pickquiz} data2={pickmore}/>
                <Instructions />
            </QuizzesPageMain>
        </>
    )
}

export default Passive