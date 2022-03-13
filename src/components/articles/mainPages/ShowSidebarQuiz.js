import React, {useState} from 'react'
import { ShowContent, ShowSideBarButton } from '../../../General Styles/ShowSideBarQuiz.styled'
import Sidebar from '../Sidebar'
import {FaAngleLeft, FaTimes } from 'react-icons/fa'

const ShowSideBar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <ShowSideBarButton>
                <button onClick={() => setShow(!show)}>
                    <div className="icon">{show? (<button className='a'><FaTimes /></button>): <FaAngleLeft/>}</div>
                </button>
        </ShowSideBarButton>
            {show &&
                <ShowContent>
                    <Sidebar/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
