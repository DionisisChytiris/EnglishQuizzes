import React from 'react'
import { QuizzesPageMain } from '../../../General Styles/QuizzesPage.styled'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import Return from './Return'

const Tenses2 = () => {
    return (
        <>
            <div className="fatline"></div>
            <QuizzesPageMain>
                <SidebarGlobal title='Tenses 2' data1={pickquiz} data2={pickmore}/>
                <Return />
            </QuizzesPageMain>
        </>
    )
}

export default Tenses2
