import React from 'react'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import styled from 'styled-components'

const InstructionsMain = styled.div`
    /* height: 75vh; */
    height: 100%auto;
    width: 70%;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: aqua;

    h1{
        font-size: clamp(1.8rem, 2vw, 2.2rem);
        margin-top: 80px;
        margin-bottom: 80px;
    }
    @media (max-width: 850px){
       width: 95%;
    }
`

const Return = () => {
    return (
        <>
        <ShowSideBar/>
        <InstructionsMain>
            <h1>Instructions</h1>
        </InstructionsMain>
        </>
    )
}

export default Return