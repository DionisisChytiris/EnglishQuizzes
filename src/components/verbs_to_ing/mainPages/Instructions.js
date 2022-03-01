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
    img{
        width: 500px;
        height: 300px;
        margin: auto;
    }
`

const Instructions = () => {
    return (
        <>
            <ShowSideBar/>
            <InstructionsMain>
                Instructions
                <img src={'/images/parliament.jpg'} alt='parliament'/>
                <br/>
                {/* <img src={require('/images/stPaul.jpg')}/> */}
            </InstructionsMain>
        </>
    )
}

export default Instructions