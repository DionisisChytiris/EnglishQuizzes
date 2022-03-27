import React from 'react'
import Instructions from './Instructions'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import {QuizzesPageMain} from '../../../General Styles/QuizzesPage.styled'


const Pronouns = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                <SidebarGlobal title='Pronouns' data1={pickquiz} data2={pickmore}/>
                <Instructions/>           
            </QuizzesPageMain>
        </>
    )
}

export default Pronouns
