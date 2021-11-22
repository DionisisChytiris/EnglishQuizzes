import styled from 'styled-components'

export const ConditionalsGrammar = styled.div`
    background: white;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const ConditionalSide = styled.div`
    /* margin-top: 300px; */
`

export const ConditionalMain = styled.div`
   background-color:  white;
    /* height: 100vh; */
    height: 100%;
    /* width: 100%; */
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* box-shadow: 1px 5px 0px  rgba(0, 0, 0, 0.2); */

    @media (max-width: 700px){
        width: 100%;
    }
    `

export const Conditional1 = styled.div`
    height: 100%;
    /* height: 460vh; */
    width: 800px;
    margin-bottom: 20px;
    h1{
        padding: 50px 0px 40px 30px;
        font-size: var(--main-title);
        font-weight: 600;
    }   
    .structure{
        background: var(--cl-primary-blue);
        color: white;
        width: 70%;
        font-weight: 600;
        padding: 3% 5% ;
        font-size: clamp(1.8rem, 2vw, 2.5rem);
        text-align: center;
        margin: 10px auto 30px;

        @media (max-width: 700px){
        width: 90%;
        padding: 10px 0px;
    }
    }
    .box1{
        padding-left: 12%;      
        display: flex;
    }
    .box2{
        display: flex;
        font-size: 16px;
        margin-top: 10px;
        padding-left: 18%;      
    }
    .b {
        width: 50px;
    }
    .c {
        width: 100px;
    }
    .example{
        display: flex;
        margin-left: 30px;
    }
    .example1{
        width: 5px;
        border-radius: 10px;
        height: 75px;
        background: var(--cl-primary-blue);
    }
    .example2{
        width: 5px;
        border-radius: 10px;
        height: 117px;
        background: var(--cl-primary-blue);
    }
    .example3{
        width: 5px;
        border-radius: 10px;
        height: 30px;
        background: var(--cl-primary-blue);
    }
    p{
        font-size: var(--main-text);
        padding:  0px 0px 20px 30px;
        font-weight: 100;
    }
    h3{
        font-size: clamp(1.1rem, 1.2vw, 1.2rem);
        padding:  40px 0px 20px 30px;
        font-weight: 100;
    }    
    li{
        font-size: clamp(1.1rem, 1.2vw, 1.2rem);
        margin-left: 5%;
        font-weight: 600;
        width: 700px;
        list-style: none;
        color: var(--cl-primary-darkblue);
    }    
    h4{
        font-size: clamp(1rem, 1.1vw, 1.1rem);
        margin-left: 5%;
        font-weight: 100;
        color: var(--cl-primary-blue);
    }
    italic{
        font-style: italic;
        
    }
    light{
        font-weight: 100;
        font-style: italic;
        padding-left: 10px;
        font-size: 1rem;
    }
    @media (max-width: 1100px){
        width: 95%;
    }
`

export const QuizzesButton = styled.div`   
    .passive-button {
        width: 250px;
        height: 80px;
        background: var(--cl-primary-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        color: white;
        font-weight: 600;
        margin: 50px auto 80px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .passive-button:hover {
        background: #045370;
    }
`

export const ConditionalType = styled.div`
    h1{
        font-size: var(--section-title);
        padding: 18px;
        background: var(--cl-primary-lightgrey);
        margin: 70px 30px 40px 30px;
    }
    .structure{
        background: var(--cl-primary-blue);
        color: white;
        width: 80%;
        font-size: clamp(1.4rem, 1.6vw, 1.6rem);
        margin: 10px auto 30px; 
    }
    .b{
        width: 10%;
        /* color: var(--cl-primary-blue); */
    }
    p,
    h3 {
        margin-left: 20px;
        padding-right: 20px;
    }
    .example{
        margin-left: 50px;
    }
    .box3 {
        display: flex;
    }
    sub_title{
        color: var(--cl-primary-darkblue);
        font-weight: 600;
    }
`