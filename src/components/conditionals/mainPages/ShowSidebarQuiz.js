import React, {useState} from 'react'
import pickmore from '../data/pickmore'
import pickquiz from '../data/pickquiz'
import SidebarGlobal from '../../../General Pages/Sidebar Pick Quiz/Sidebar'
import { ShowContent, ShowSideBarButton } from '../../../General Styles/ShowSideBarQuiz.styled'
import {FaAngleLeft, FaTimes } from 'react-icons/fa'

const ShowSideBar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <ShowSideBarButton>
                <button onClick={() => setShow(!show)}>
                    <div className="icon">{show ? (<button className='a'><FaTimes /></button>): <FaAngleLeft/>}</div>
                </button>
        </ShowSideBarButton>
            {show &&
                <ShowContent>
                    <SidebarGlobal title='Conditionals' data1={pickquiz} data2={pickmore}/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
