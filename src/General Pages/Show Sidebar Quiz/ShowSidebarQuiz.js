import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import {FaAngleLeft, FaTimes} from 'react-icons/fa'
import styled from 'styled-components'

const ShowSideBarButtonA = styled.div`
    display: none;

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 70px;
        left: 20px;
        opacity: 1;
        z-index: 10000;

        button{
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            /* background-color: lightgrey; */
            background-color: red;
            /* width: 100vh; */
            cursor: pointer;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: white
            /* color: var(--cl-primary-darkblue) ; */
        }
        .icon:hover{
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
            /* margin-left: 300px; */
        }
        .a:hover{
            background-color: green;
        }
        .icon:hover{
            /* transform: rotate(270deg); */
        }
    }
`
const ShowContentA = styled.div`
    display: none;

    @media (max-width: 850px){
        display: block;
        position: absolute;
        top: 15px;
        left: 190px;
        opacity: 1;
    }
`

const ShowSideBarQuizA = (props) => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <ShowSideBarButtonA>
            <button onClick={() => setShow(!show)}>
                <div className="icon">{show? (<button className='a'><FaTimes /></button>): <FaAngleLeft/>}</div>
            </button>
        </ShowSideBarButtonA>
            {show &&
                <ShowContentA>
                    {props.sidebar}
                </ShowContentA>}
        </>
    )
}

export default ShowSideBarQuizA
