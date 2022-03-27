import React from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
// import Sidebar from '../Sidebar'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import Instructions from './Return'

const Prepositions = () => {
    return (
        <>
        <div className="fatline"></div>
            <QuizzesPageMain>
                {/* <Sidebar /> */}
                <SidebarGlobal title='Prepositions' data1={pickquiz} data2={pickmore}/>
                <Instructions/>
            </QuizzesPageMain>
        </>
    )
}

export default Prepositions
