import React, {useState} from 'react'
import Sidebar from '../Sidebar'
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
                    <Sidebar/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
