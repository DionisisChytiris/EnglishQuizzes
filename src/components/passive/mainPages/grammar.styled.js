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

    .passive-button {
        width: 250px;
        height: 80px;
        margin: auto;
        background: var(--cl-primary-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: white;
        font-weight: 600;
        margin: 100px auto;
        border-radius: 8px;
    }
    .passive-button:hover {
        background: #045370;
    }
`

export const PassiveSide = styled.div`
    /* margin-top: -1000px; */
`

export const PassiveContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 10%;
    justify-content: center;

    @media (max-width: 1100px){
        width: 80%;
    }
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
        font-size: clamp(1.2rem, 1.4vw, 1.5rem);
    }
    .voice1 {
        text-align: left;
        font-size: clamp(1.2rem, 1.4vw, 1.5rem);
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
    .box1 .a,
    .box2 .a{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        margin-bottom: 10px;
        list-style: none;
    }
    li {
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        margin-bottom: 10px;
        margin-left: 15px;
    }
    .example{
        font-size: clamp(1.1rem, 1.3vw, 1.5rem);
        margin-bottom: 10px;
        background: #e7e6e6;
        padding: 10px;
    }
    .voice2{
        font-size: clamp(1.1rem, 1.3vw, 1.5rem);
        margin-bottom: 10px;
        margin-top: 50px;
        background: #e7e6e6;
        padding: 10px;
    }
`


export const PassiveContainer2 = styled.div`
    width: 90%;
    height: 110vh;
    background: var(--cl-primary-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 20px;
    
    h1 {
        font-size: 16px;
        width: 250px;
        height: 60px;
        padding: 5px 0px 0px 10px;
        color: var(--cl-primary-blue);
        /* border-bottom: 0.1rem  solid #ccc; */
    }
    p {
        font-size: 20px;
        border-bottom: 0.1rem solid black;
        padding: 10px;
        padding-left: 20px;
        width: 100%;
    }
`
export const PassiveColumnContainer = styled.div`
    width: 70%;
    height: 83vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PassiveColumn1 = styled.div`
    width: 20%;
    height: 83vh;
    background: white;
    color: black;
    
    .passive-active-box {
        padding: 5px 0px 0px 10px;
        border-bottom: 0.1rem solid #ccc;
        height: 60px;
    }
    h1{
        padding-top: 10px;
    }
    h2 {
        font-size: 16px;
        padding: 4px 0px 20px 10px;
        margin-top: -40px;
        color: var(--cl-primary-blue);
    }
    `
export const PassiveColumn2 = styled.div`
    width: 35%;
    height: 83vh;
    background: #f5f5f5;
    color: black;
    h2 {
        font-size: 14px;
        font-weight: 200;
        color: grey;
    }
    h3 {
        font-size: 16px;
        margin-bottom: 5px;
    }
    .passive-active-box {
        padding: 5px 0px 0px 10%;
        border-bottom: 0.1rem solid #ccc;
        height: 60px;
    }
    `
export const PassiveColumn3 = styled.div`
    width: 35%;
    height: 83vh;
    background: white;
    color: black;
    h2 {
        font-size: 14px;
        font-weight: 200;
        color: grey;
    }
    h3 {
        font-size: 16px;
        margin-bottom: 5px;
    }
    .passive-active-box {
        padding: 5px 0px 0px 10%;
        border-bottom: 0.1rem solid #ccc;
        height: 60px;
    }
`
