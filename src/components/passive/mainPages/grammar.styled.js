import styled from 'styled-components'

export const PassiveGrammar = styled.div`
    background: white;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const PassiveMain = styled.div`
    background-color:  white;
    height: 100vh;
    height: 100%;
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 0.1rem solid grey; */
`
export const PassiveSide = styled.div`
    /* margin-top: -1000px; */
`
export const PassiveContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 10%;
    justify-content: center;
    /* border: 0.1rem solid grey; */
    /* padding: 10px 40px; */
    h1{
        font-size: clamp(2rem, 2.8vw, 3.5rem);
        padding-top: 40px;
    }
    h3{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        margin-top: 0.8%;
        margin-bottom: 50px;
        margin-left: 2%;
    }
    .line {
        width: 32%;
        height: 0.2rem;
        background-color: var(--cl-primary-blue);
        margin-bottom: 50px;
        margin-top: 5px;
    }
    .voice {
        text-align: left;
        font-size: clamp(1.1rem, 1.3vw, 1.4rem);
    }
    .voice1 {
        text-align: left;
        font-size: clamp(1.1rem, 1.3vw, 1.4rem);
        padding-top: 10px;
    }
    .box {
        width: 95%;
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
        margin-bottom: 10px;

        @media (max-width: 850px){
        flex-direction: column;
        justify-content: space-around;
        margin: 20px;
        }
    }
    .box1 {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 10px;
        border-left: 0.3rem solid #1fc0fa;

        @media (max-width: 850px){
        .example{
            width: 95%;
        }
        }
    }
    .box2 {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 10px;
        border-left: 0.3rem solid #1fc0fa;

        @media (max-width: 850px){
        margin-top: 20px;
            .example{
                width: 95%;
            }
        }
    }
    color {
        color: var(--cl-primary-blue);
        font-weight: 600;
    }
    green {
        color: green;
        font-weight: 600;
    }
    .box1 .a,
    .box2 .a{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        margin-bottom: 10px;
        list-style: none;
    }
    .example{
        font-size: clamp(1.1rem, 1.3vw, 1.5rem);
        margin-bottom: 10px;
        background: #e7e6e6;
        padding: 10px;
    }
    .show-below{
        font-size: clamp(1rem, 1.1vw, 1.3rem);
        margin-bottom: 30px;
        margin-top: -20px;
        color: var(--cl-primary-darkblue);
        font-weight: 600;
    }
    @media (max-width: 1100px){
        width: 90%;
    }
`
// How to form the passive voice & when should use it
export const ActivePassiveRules = styled.div`
    p{
        margin-left: 5px;
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: clamp(1rem, 1.1vw, 1.2rem);
    }
    h1{
        font-size: clamp(1.1rem, 1.3vw, 1.5rem);
        margin-bottom: 10px;
        margin-top: 50px;
        background: #e7e6e6;
        padding: 10px;
        display: flex;
        flex-direction: row;
        h3{
            margin: 0px 0px 0px 30px;
        }
    }
    h2{
        font-size: clamp(1.2rem, 1.3vw, 1.5rem);
        margin: 5% 0px 10px 0px;
        color: var(--cl-primary-darkblue);
    }
    h3{
        font-size: clamp(1rem, 1vw, 1rem);
        margin: -10px 0px 5px 35px;
        color: var(--cl-primary-darkblue);
    }
    h4{
        font-size: clamp(1.1rem, 1.2vw, 1.2rem);
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 30%;
        color: var(--cl-primary-darkblue);
    }
    li {
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        margin-bottom: 10px;
        margin-left: 15px;
        /* font-weight: 600; */
        /* color: red; */
    }
    colorDark{
        font-size: 22px;
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    colorDarkBlue{
        /* font-size: 22px; */
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
`
export const SubjectObject = styled.div`
    li {
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        margin-bottom: 10px;
        margin-left: 15px;
        /* color: red; */
    }
    .right{
        color: var(--cl-primary-darkblue);
        font-size: clamp(0.8rem, 1vw, 1rem);
        margin-left: 140px;
        margin-top: -10px;
    }
    .left{
        color: var(--cl-primary-darkblue);
        margin-left: 265px;
        font-size: clamp(0.8rem, 1vw, 1rem);
        margin-top: -25px;
    }
    .left-active{
        color: var(--cl-primary-darkblue);
        margin-left: 90px;
        font-size: clamp(0.8rem, 1vw, 1rem);
        margin-bottom: -30px;
        font-weight: 600;
    }
    .right-passive{
        color: var(--cl-primary-darkblue);
        margin-left: 290px;
        font-weight: 600;
        font-size: clamp(0.8rem, 1vw, 1rem);
        margin-top: 5px;
    }
    @media (max-width: 600px){
        width: 105%;
        li.a{
            font-size: 0.9rem;
            list-style: none;
            margin-left: 0px;
        }
        .left{
            margin-left: 200px;
        }
        .right{
            margin-left: 90px;
        }
        .left-active{
            margin-left: 55px;
        }
        .right-passive{
            margin-left: 245px;
        }
    }
`
export const BePastParticiple = styled.div`
    .right{
        color: var(--cl-primary-darkblue);
        font-size: clamp(0.8rem, 1vw, 1rem);
        margin-left: 70px;
        margin-top: -10px;
    }
    .left{
        color: var(--cl-primary-darkblue);
        margin-left: 145px;
        font-size: clamp(0.8rem, 1vw, 1rem);
        margin-top: -25px;
    }
`
// Active-passive sentences container
export const PassiveContainer2 = styled.div`
    width: 80%;
    height: 85vh;
    /* background: var(--cl-primary-blue); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 850px){
        width: 85%;
        height: 100%;
    }  
`
export const PassiveActiveContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* padding: 0px 2%; */
    @media (max-width: 850px){
        /* width: 97%; */
        flex-direction: column;
    }  
`
export const TenseBox = styled.div`
    padding: 10px 0px 0px 10px;
    height: 8.5vh;
    width: 25%;
    background-color: white;
    border-bottom: 0.05rem solid lightgrey;
    h1 {
        font-size: 16px;
        width: 250px;
        height: 7vh;
        padding: 5px 0px 0px 10px;
        color: var(--cl-primary-darkblue);
    }
    @media (max-width: 850px){
        width: 100%;
        height: 5vh;
        padding: 0px 10px ;
        border-bottom: none;
    }  
    `
export const PassiveActiveBox = styled.div`
    padding: 5px 0px 0px 8%;
    height: 8.5vh;
    width: 75%;
    border-bottom: 0.05rem solid lightgrey;
    background: #f5f5f5;
    @media (max-width: 850px){
        width: 100%;
        padding: 5px 20px;
        border-bottom: 0.1rem solid lightgrey;
    } 
    `
export const ActiveSentence = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h2 {
        font-size: 15px;
        font-weight: 200;
        font-weight: 600;
        color: green;
    }
    .color{
        font-size: 15px;
        color: var(--cl-primary-blue);
        font-weight: 600;
        margin: 0px 5px;
    }
`
export const PassiveSentence = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
        font-size: 16px;
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    .color{
        font-size: 16px;
        color: var(--cl-primary-blue);
        font-weight: 600;
        margin: 0px 5px;
    }
`
export const PassiveContainerTitles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    /* @media (max-width: 850px){
        width: 95%;
    } */
`
export const PassiveColumnTenses = styled.div`
    width: 25%;
    background: white;
    color: black;
    p {
        height: 8.5vh;
        font-size: 20px;
        padding: 10px;
        padding-left: 20px;
        width: 100%;
        background: var(--cl-primary-darkblue);
        color: white;
        display: flex;
        /* flex-direction: row; */
        align-items: center;
    }
    @media (max-width: 850px){
        /* width: 30%; */
    }
    `
export const PassiveColumnExamples = styled.div`
    width: 75%;
    background: #f5f5f5;
    color: black;
    .active-passive-title{
        height: 8.5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: center; */
        background: var(--cl-primary-darkblue);
        color: white;
    }
    .a {
        margin-left: 15%;
        color: green;
        background-color: #f5f5f5;
        padding: 0px 5px;
        border-radius: 20px;
        font-weight: 600;
    }
    .b {
        background-color: #f5f5f5;
        padding: 0px 6px;
        border-radius: 20px;
        margin-left: 30px;
        color: var(--cl-primary-darkblue);
        font-weight: 600;
    }
    `
