import React, {useState} from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import {FaAngleLeft, FaTimes } from 'react-icons/fa'
import { ShowContent, ShowSideBarButton } from '../../../General Styles/ShowSideBarQuiz.styled'


const ShowSideBar = () => {
    const [show, setShow] = useState(false)
    // const [click, setClick] = useState(true)
    
    return (
        <>
        <ShowSideBarButton>
                <button onClick={() => setShow(!show)}>
                    <div className="icon">{show ? (<button className='a'><FaTimes /></button>): <FaAngleLeft/>}</div>
                </button>
                {/* {click ? <FaTimes/> : <FaBars/>} */}
        </ShowSideBarButton>
            {show &&
                <ShowContent>
                    <SidebarGlobal title='Gerund/Infinitive' data1={pickquiz} data2={pickmore}/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
