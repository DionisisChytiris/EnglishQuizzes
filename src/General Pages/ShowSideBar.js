import React, {useState} from 'react'
import styled from 'styled-components'
import SidebarGrammar from './SidebarGrammar'

const ShowSideBarButton = styled.div`
    display: none;

    @media (max-width: 1150px){
        display: block;
        color: red;
        position: absolute;
        margin-top: 10px;
        margin-left: -80%;
    }
`
const ShowContent = styled.div`
    display: none;

    @media (max-width: 1150px){
        display: block;
        position: absolute;
        top: 110px;
        left: 300px;
        /* transition: all 0.5s ease; */
    }
`

const ShowSideBar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <ShowSideBarButton>
            <button onClick={()=> setShow(!show)}>Click</button>
        </ShowSideBarButton>
            {show &&
                <ShowContent>
                    <SidebarGrammar />
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
