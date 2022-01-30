import React, {useState} from 'react'
import { ShowContent, ShowSideBarButton } from '../../../General Styles/ShowSideBarQuiz.styled'
import Sidebar from '../Sidebar'
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
                    <Sidebar/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
