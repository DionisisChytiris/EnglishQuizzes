import React, {useState} from 'react'
import styled from 'styled-components'
import SidebarGrammar from './SidebarGrammar'
import {FaAngleLeft, FaTimes} from 'react-icons/fa'

const ShowSideBarButton = styled.div`
    display: none;

    @media (max-width: 1150px){
        /* display: block;
        color: black;
        position: absolute;
        top: 80px;
        left: 30px;
        opacity: 1; */
        display: block;
        position: absolute;
        top: 70px;
        left: 20px;
        opacity: 1;

        button{
            /* border: none;
            width: 40px;
            height: 40px;
            background-color: var(--cl-primary-blue);
            border-radius: 50%;
            cursor: pointer; */
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: lightgrey;
            cursor: pointer;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            /* color: white; */
            color: var(--cl-primary-darkblue) ;
        }
        .icon:hover{
            /* transform: rotate(270deg); */
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: grey;
        }
        .a{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            padding: 10px 15px;
            color: var(--cl-primary-darkblue);
        }
        .a:hover{
            background-color: grey;
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
    // const [icons, setIcons] = useState(false)
    
    return (
        <>
        <ShowSideBarButton>
            <button onClick={() => {
                setShow(!show)
                // setIcons(!icons)
            }}>
                <div className='icon'>{show? (<button className='a'><FaTimes /></button>): <FaAngleLeft/>}</div>
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
