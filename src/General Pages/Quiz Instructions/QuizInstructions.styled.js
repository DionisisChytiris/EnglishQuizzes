import styled from 'styled-components'

export const InstructionsMain = styled.div`
    /* height: 75vh; */
    height: 100%;
    width: 70%;
    margin: 5% auto;
    padding: 30px 0px 80px 0px;
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
    padding: 50px 0px 50px 50px;
    background-color: lightgray;
    margin-bottom: 40px;

    .instructions{
        margin-bottom: 5px;
        font-size: 18px;
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
        margin: 0px 0px 10px 40px;
    }
    li{
        margin-top: 5px;
        list-style: disc;
    }
    .left-space{
        padding-left: 20px;
        font-size: clamp(1rem, 1.2vw, 1.2rem)
    }
    .symbols-guide{
        padding-left: 10px;
        color: green;
    }
    .line{
        display: flex;
        flex-direction: row;
        padding-top: 3px;
    }
    .a{
        padding-top: 10px;
    }
    .b{
        padding-top: 2px;
    }
    .sideBar-symbols{
        padding: 20px 20px 10px 20px;
        font-size: clamp(0.75rem, 0.85vw, 1rem);
        color: green;
    }
    .icon{
        color: var(--cl-primary-darkblue)
    }
    .icon1{
        color: var(--cl-primary-darkblue);
        font-size: 22px;
        margin-left: -4px;
    }
    .icon2{
        color: var(--cl-primary-darkblue);
        font-size: 15px;
    }
    .gap-left{
        padding-left: 20px;
    }
    @media (max-width: 450px){
       padding: 20px;
       p{
           font-size: 16px;
       }
    }
`