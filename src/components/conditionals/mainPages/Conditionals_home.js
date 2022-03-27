import React from 'react'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'
import Instructions from './Instructions'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'

const Conditionals = () => {
    return (
        <>
            <div className="fatline"></div>
            <QuizzesPageMain>
                <SidebarGlobal title='Conditionals' data1={pickquiz} data2={pickmore}/>
                <Instructions />
            </QuizzesPageMain>
        </>
    )
}

export default Conditionals
