import styled from 'styled-components'

export const InstructionsMain = styled.div`
    /* height: 75vh; */
    height: 100%auto;
    width: 70%;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: var(--cl-primary-darkblue); */
    /* background: #03035E; */
    background: linear-gradient(to bottom right, #00003A 5%,#0707A9 );

    h1{
        font-size: clamp(1.8rem, 2vw, 2.2rem);
        margin-top: 40px;
        margin-bottom: 30px;
        background: linear-gradient(to right, white, aqua, white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 850px){
       width: 95%;
    }
`
export const InstructionsContainer = styled.div`
    width: 80%;
    /* height: 100%; */
    padding: 50px ;
    background-color: lightgray;
    margin-bottom: 40px;

    p{
        margin-bottom: 5px;
        font-size: 18px;
        font-weight: 600;
        /* border: 0.1rem solid black; */
    }
    gradient{
        background: linear-gradient(to right, blue, aquamarine, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    light{
        margin-left: 10px;
        font-size: 17px;
        font-weight: 100;
        color: black;
    }
    ul{
        margin-left: 130px;
    }
`