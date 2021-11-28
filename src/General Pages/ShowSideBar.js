import React, {useState} from 'react'
import styled from 'styled-components'
import SidebarGrammar from './SidebarGrammar'
import {FaAngleLeft } from 'react-icons/fa'

const ShowSideBarButton = styled.div`
    display: none;

    @media (max-width: 1150px){
        display: block;
        color: black;
        position: absolute;
        top: 80px;
        /* margin-left: -80%; */
        left: 30px;
        opacity: 1;

        button{
            border: none;
            width: 40px;
            height: 40px;
            background-color: var(--cl-primary-blue);
            border-radius: 50%;
            cursor: pointer;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: white;
        }
        .icon:hover{
            transform: rotate(270deg);
        }
    }
`
const ShowContent = styled.div`
    display: none;

    @media (max-width: 1150px){
        display: block;
        position: absolute;
        top: 120px;
        left: 300px;
        opacity: 1;
        /* transition: all 0.5s ease; */
    }
`

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
                    <SidebarGrammar />
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
