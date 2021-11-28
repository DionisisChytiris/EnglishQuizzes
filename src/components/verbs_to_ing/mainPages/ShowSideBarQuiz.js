import React, {useState} from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar'
import {FaAngleLeft } from 'react-icons/fa'

const ShowSideBarButton = styled.div`
    display: none;

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 70px;
        /* margin-left: -80%; */
        left: 20px;
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

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 60px;
        left: 160px;
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
                    <Sidebar/>
                </ShowContent>}
        </>
    )
}

export default ShowSideBar
