import styled from 'styled-components'

export const PronounsGrammar = styled.div`
    background: white;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`
export const PronounsSide = styled.div`
    /* margin-top: -900px; */
`
export const PronounsMain = styled.div`
    background-color:  white;
    height: 100%;
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const PronounsContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 10%;
    justify-content: center;
    h1{
        font-size: clamp(2.2rem, 2.8vw, 3.5rem);
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
        font-size: clamp(1.2rem, 1.3vw, 1.3rem);
    }
    .voice0 {
        text-align: left;
        font-size: clamp(1.2rem, 1.3vw, 1.3rem);
        color: var(--cl-primary-darkblue);
    }
    .voice1 {
        text-align: left;
        font-size: clamp(1.1rem, 1.3vw, 1.3rem);
        padding-top: 10px;
    }
    italic{
        font-style: italic;
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
        border-left: 0.2rem solid #1fc0fa;

        @media (max-width: 850px){
        .example{
            /* width: 95%; */
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
        width: 95%;
    }
    .example{
        font-size: clamp(1.1rem, 1.3vw, 1.3rem);
        margin-bottom: 10px;
        background: #e7e6e6;
        padding: 15px;
        width: 100%;
    }
    .example1,
    .example2{
        font-size: clamp(1.1rem, 1.3vw, 1.3rem);
        margin-bottom: 10px;
        background: pink;
        padding: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .example2{
        background: lightgreen;
    }
    .letter{
        margin-bottom: 5px;
    }
    .example1 .x,
    .example2 .x{
        display: flex;
        align-items: center;
        padding-right: 7%;
        color: white;
        font-weight: 600;
        font-size: 35px;
        @media (max-width: 800px){
            padding-right: 5%;
        }
    }
    .example2 .x{
        font-size: 30px;
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
export const PronounsRules = styled.div`
    p{
        margin-left: 5px;
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: clamp(1.1rem, 1.1vw, 1.2rem);
    }
    .green-box{
        /* border-top: 2rem solid darkgreen; */
        border-radius: 4px;
       box-shadow: 1px 1px 8px 1px darkgreen;
       padding: 5px 10px 0px 10px;
    }
    .blue-box{
       box-shadow: 3px 3px 5px 3px #1fc0fa;
       padding: 5px 10px 0px 10px;
    }
    .left-line{
        border-right: 0.6rem solid green;
    }
    .space{
        margin-top: 25px; 
        width: 98%;
        z-index: 3
    }
    .nospace{
        margin-top: -8px;
    }
    p.small{
        font-size: 1.1rem;
    }
    p.large{
        font-size: 1.2rem;
    }
    p.exlarge{
        font-size: 1.3rem;
        z-index: 3
    }
    .space-left{
        margin-left: 20px;
    }
    .sub-box{
        background-color: #f5f5f5;
        padding: 15px;
        border-radius: 4px;
        margin-bottom: 10px;
        width: 98%;
    }
    .underline {
        width: 50%;
        height: 1px;
        background-color: green;
        border-radius: 10px;
        margin: 30px auto;
    }
    h1{
        font-size: clamp(1.2rem, 1.3vw, 1.5rem);
        margin-bottom: 10px;
        margin-top: 50px;
        background: #e7e6e6;
        border-radius: 5px;
        padding: 15px;
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
        font-size: clamp(1.1rem, 1.1vw, 1.15rem);
        margin-bottom: 10px;
        margin-left: 15px;
        color: var(--cl-primary-darkblue);
        font-weight: 600;
        /* font-weight: 600; */
        /* color: red; */
    }
    .read_more{
        width: 100px;
        margin-left: 10px;
        margin-top: 10px;
        border: none;
        background-color: var(--cl-primary-darkblue);
        color: white;
        font-weight: 600;
    }
    .read_more:hover {
        background-color: orange;
        color: var(--cl-primary-darkblue);
    }
    lightBlack{
        color: black;
        font-weight: 100;
        font-size: 16px;
        margin-left: 10px;
    }
    black{
        color: black;
        font-weight: 600;
        font-size: 22px;
    }
    red{
        color: red;
    }
    red.a{
        text-decoration: line-through;
    }
    lightgreen {
        cursor: pointer;
        color: green;
        font-weight: 600;
        background: #f5f5f5;
        border-radius: 10px;
        padding: 2px 5px;
    }
    colorDark{
        font-size: 22px;
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    darkblue{
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    colorOrange{
        font-weight: 600;
        color: orange;
    }
    colorBlue{
        font-weight: 600;
        color: var(--cl-primary-blue);
    }
`
export const PronounsChartIndefinite = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ul{
        text-align: center;
    }
    li{
        font-size: clamp(1.1rem, 1.1vw, 1.2rem);
        font-weight: 200;
    }
    li.a{
        font-weight: 600;
        color: var(--cl-primary-blue);
    }
    li.b{
        font-weight: 600;
        color: darkgreen;
    }
`
export const PronounChart = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10%;
    margin-bottom: 5%;
    .row{
        display: flex;
        flex-direction: row;
    }
    .row h1 {
        width: 34.8%;
        background-color: var(--cl-primary-darkblue);
        color: white;
        padding: 10px 0px 0px 35px;
        font-size: clamp(1rem, 1.1vw, 1.1rem);
    }
    .row .possessive {
        width: 34.8%;
        background-color: var(--cl-primary-darkblue);
        color: white;
        font-weight: 600;
        padding: 10px 0px 0px 65px;
        font-size: clamp(1rem, 1.1vw, 1.1rem);
    }
    .row h2 {
        width: 13%;
        background-color: var(--cl-primary-blue);
        color: white;
        margin: 0px;
        padding: 20px 0px 20px 10px;
        line-height: 1;
        font-size: clamp(0.7rem, 0.8vw, 0.8rem);
        border-bottom: 0.1rem solid white;
    }
    .row .empty {
        width: 13%;
        background-color: orange;
        border-radius: 30px 0px 0px 0px;
        color: white;
        margin: 0px;
        padding: 20px 0px 20px 10px;
        line-height: 1;
        font-size: clamp(0.7rem, 0.8vw, 0.8rem);
    }
    .row .empty1 {
        width: 13%;
        background-color: orange;
        /* border-radius: 20px 0px 0px 0px; */
        color: white;
        margin: 0px;
        padding: 20px 0px 20px 10px;
        line-height: 1;
        font-size: clamp(0.7rem, 0.8vw, 0.8rem);
    }
    .row h3 {
        width: 17.4%;
        background-color: var(--cl-primary-darkblue);
        color: white;
        margin: 0px;
        padding: 10px ;
        line-height: 1;
        font-size: clamp(0.9rem, 1vw, 1rem);

    }
    .a{
        border-radius: 0px 5px 0px 0px ;
    }
    .b{
        border-radius: 0px 0px 5px 0px ;
    }
    .empty.bottom{
        border-radius: 0px 0px 0px 30px;
    }
    .row h5 {
        width: 17.4%;
        background-color: var(--cl-primary-darkblue);
        color: white;
        margin: 0px;
        padding: 10px 10px 10px 0px;
        line-height: 1;
        font-size: clamp(0.8rem, 0.9vw, 0.9rem);
    }
    .row h4 {
        border-bottom: 0.1rem solid green;
        /* width: 16.666%; */
        width: 17.4%;
        background-color: var(--cl-secondary-lightgrey);
        margin: 0px;
        padding-left: 15px;
        display: flex;
        align-items: center;
        line-height: 1;
        font-size: clamp(0.9rem, 1vw, 1rem);
    }
`