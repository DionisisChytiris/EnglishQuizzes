import React from 'react'
import styled from 'styled-components'
import ShowSideBar from './ShowSideBarQuiz'

const InstructionsMain = styled.div`
    height: 75vh;
    /* height: 100%auto; */
    width: 850px;
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
`

const Return = () => {
    return (
        <>
            <ShowSideBar/>
            <InstructionsMain>
                Instructions
            </InstructionsMain>
        </>
    )
}

export default Return