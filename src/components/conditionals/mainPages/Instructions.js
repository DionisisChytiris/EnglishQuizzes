import React from 'react'
import styled from 'styled-components'
import ShowSidebarQuiz  from './ShowSidebarQuiz'

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

const Instructions = () => {
    return (
        <>
        <ShowSidebarQuiz/>
        <InstructionsMain>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
            <h1>Instructions</h1>
        </InstructionsMain>
        </>    
    )
}

export default Instructions