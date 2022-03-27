import React, {useState} from 'react'
import { ShowContent, ShowSideBarButton } from '../../../General Styles/ShowSideBarQuiz.styled'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import {FaAngleLeft } from 'react-icons/fa'

const ShowSideBar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <ShowSideBarButton>
                <button onClick={() => setShow(!show)}>
                    <div className="icon"><FaAngleLeft /></div>
                </button>
        </ShowSideBarButton>
            {show &&
                <ShowContent>
                    <SidebarGlobal title='Pronouns' data1={pickquiz} data2={pickmore}/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
